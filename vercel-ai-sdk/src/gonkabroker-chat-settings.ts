/**
 * Model identifiers served by Gonka Broker.
 *
 * The union lists the models available at the time of publishing for editor
 * auto-complete, but the trailing `(string & {})` keeps any model id valid —
 * the live, authoritative catalog is always `GET /v1/models`.
 */
export type GonkaBrokerChatModelId =
  | 'Qwen/Qwen3-235B-A22B-Instruct-2507-FP8'
  | 'moonshotai/Kimi-K2.6'
  | 'MiniMaxAI/MiniMax-M2.7'
  | (string & {});

export type GonkaBrokerCompletionModelId = string & {};
