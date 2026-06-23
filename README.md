# Gonka Broker — Integrations

Integrations between [Gonka Broker](https://gonkabroker.com) and the AI tooling ecosystem.
Gonka Broker is an OpenAI-compatible inference gateway to open-source models running on the
decentralized [Gonka](https://gonka.ai) network — no crypto or wallet needed.

- **Base URL:** `https://proxy.gonkabroker.com/v1`
- **Auth:** `Authorization: Bearer <gnk-prx-...>` · key from the app at [gonkabroker.com](https://gonkabroker.com)
- **Models:** public, OpenAI-compatible catalog at `GET /v1/models`

## Available

| Folder | Tool | Package |
|---|---|---|
| [`vercel-ai-sdk/`](./vercel-ai-sdk) | Vercel AI SDK | [`@gonkabroker/ai-sdk-provider`](https://www.npmjs.com/package/@gonkabroker/ai-sdk-provider) |

More integrations are in progress and will be added here as each one is verified.
