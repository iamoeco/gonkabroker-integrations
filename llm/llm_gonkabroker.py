import json
import time
from pathlib import Path

import httpx
import llm
from llm.default_plugins.openai_models import AsyncChat, Chat

API_BASE = "https://proxy.gonkabroker.com/v1"
MODELS_URL = f"{API_BASE}/models"


class DownloadError(Exception):
    pass


def fetch_cached_json(url, path, cache_timeout):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)

    if path.is_file():
        mod_time = path.stat().st_mtime
        if time.time() - mod_time < cache_timeout:
            with open(path, "r") as file:
                return json.load(file)

    try:
        response = httpx.get(url, follow_redirects=True)
        response.raise_for_status()
        with open(path, "w") as file:
            json.dump(response.json(), file)
        return response.json()
    except httpx.HTTPError:
        if path.is_file():
            with open(path, "r") as file:
                return json.load(file)
        raise DownloadError(
            f"Failed to download models and no cache is available at {path}"
        )


def get_gonkabroker_models(skip_cache=False):
    # /v1/models is public (no auth) and OpenAI-compatible.
    return fetch_cached_json(
        url=MODELS_URL,
        path=llm.user_dir() / "gonkabroker_models.json",
        cache_timeout=0 if skip_cache else 3600,
    )["data"]


def supports_vision(model):
    return "image" in (model.get("input_modalities") or [])


def supports_feature(model, feature):
    return feature in (model.get("supported_features") or [])


class GonkaBrokerChat(Chat):
    needs_key = "gonkabroker"
    key_env_var = "GONKABROKER_API_KEY"

    def __str__(self):
        return "Gonka Broker: {}".format(self.model_id)


class GonkaBrokerAsyncChat(AsyncChat):
    needs_key = "gonkabroker"
    key_env_var = "GONKABROKER_API_KEY"

    def __str__(self):
        return "Gonka Broker: {}".format(self.model_id)


@llm.hookimpl
def register_models(register):
    # Only register if a key is configured for this plugin.
    key = llm.get_key("", "gonkabroker", "GONKABROKER_API_KEY")
    if not key:
        return
    try:
        models = get_gonkabroker_models()
    except DownloadError:
        return
    for model in models:
        model_id = model["id"]
        kwargs = dict(
            model_id="gonkabroker/{}".format(model_id),
            model_name=model_id,
            vision=supports_vision(model),
            supports_tools=supports_feature(model, "tools"),
            api_base=API_BASE,
        )
        register(
            GonkaBrokerChat(**kwargs),
            GonkaBrokerAsyncChat(**kwargs),
        )
