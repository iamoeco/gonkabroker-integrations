# @gonkabroker/ai-sdk-provider

[Gonka Broker](https://gonkabroker.com) provider for the [Vercel AI SDK](https://ai-sdk.dev).
OpenAI-compatible access to open-source models (Qwen, Kimi, MiniMax, …) running on the
decentralized [Gonka](https://gonka.ai) network — no crypto or wallet needed.

Built on [`@ai-sdk/openai-compatible`](https://www.npmjs.com/package/@ai-sdk/openai-compatible).

## Install

```bash
npm install @gonkabroker/ai-sdk-provider
```

## Usage

Set your API key (get one in the app at [gonkabroker.com](https://gonkabroker.com)):

```bash
export GONKABROKER_API_KEY="gnk-prx-..."
```

```ts
import { gonkabroker } from '@gonkabroker/ai-sdk-provider';
import { generateText } from 'ai';

const { text } = await generateText({
  model: gonkabroker('Qwen/Qwen3-235B-A22B-Instruct-2507-FP8'),
  prompt: 'Explain decentralized inference in one sentence.',
});

console.log(text);
```

### Custom configuration

```ts
import { createGonkaBroker } from '@gonkabroker/ai-sdk-provider';

const gonkabroker = createGonkaBroker({
  apiKey: process.env.GONKABROKER_API_KEY, // optional; this is the default
  // baseURL: 'https://proxy.gonkabroker.com/v1', // override if needed
  // headers: { 'X-My-Header': '...' },
});
```

### Streaming and tool calling

Streaming (`streamText`) and tool calling are supported through the OpenAI-compatible base.

```ts
import { gonkabroker } from '@gonkabroker/ai-sdk-provider';
import { streamText } from 'ai';

const result = streamText({
  model: gonkabroker('moonshotai/Kimi-K2.6'),
  prompt: 'Write a haiku about GPUs.',
});

for await (const chunk of result.textStream) process.stdout.write(chunk);
```

## Models

Any model id accepted by Gonka Broker works. The package ships auto-complete hints for the
models available at publish time; the authoritative, always-current list is the public
catalog at [`GET /v1/models`](https://proxy.gonkabroker.com/v1/models).

## License

MIT
