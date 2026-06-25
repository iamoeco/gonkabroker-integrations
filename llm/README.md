# llm-gonkabroker

[LLM](https://llm.datasette.io/) plugin for [Gonka Broker](https://gonkabroker.com) — an
OpenAI-compatible inference gateway to open-source models running on the decentralized
[Gonka](https://gonka.ai) network.

> This is a plugin for Simon Willison's `llm` CLI/library. It is unrelated to LiteLLM.

## Installation

Install this plugin in the same environment as [LLM](https://llm.datasette.io/):

```bash
llm install llm-gonkabroker
```

## Configuration

Get an API key from the app at [gonkabroker.com](https://gonkabroker.com) (keys look like
`gnk-prx-...`), then set it:

```bash
llm keys set gonkabroker
# paste your gnk-prx-... key
```

Or supply it via the `GONKABROKER_API_KEY` environment variable.

## Usage

Models are discovered from the broker's public `/v1/models` endpoint once a key is configured.
List them:

```bash
llm models list | grep -i gonka
```

Run a prompt (model ids are prefixed with `gonkabroker/`):

```bash
llm -m 'gonkabroker/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8' 'Say hello in three words'
```

Pipe content in, start a chat, or use it from Python like any other LLM model:

```bash
cat article.md | llm -m 'gonkabroker/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8' -s 'Summarize this'
llm chat -m 'gonkabroker/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8'
```

## Manual alternative (without this plugin)

Because Gonka Broker is OpenAI-compatible, you can also wire it up without the plugin by adding it
to LLM's `extra-openai-models.yaml`:

```yaml
- model_id: gonkabroker-qwen3
  model_name: Qwen/Qwen3-235B-A22B-Instruct-2507-FP8
  api_base: https://proxy.gonkabroker.com/v1
  api_key_name: gonkabroker
```

The plugin is the convenient, auto-updating path; this manual route is the universal fallback.

## Development

To set up this plugin locally, check out the repo and install it editable:

```bash
cd llm
llm install -e .
```
