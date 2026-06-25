/**
 * Model identifiers served by Gonka Broker.
 *
 * The union lists the models available at the time of publishing for editor
 * auto-complete, but the trailing `(string & {})` keeps any model id valid —
 * the live, authoritative catalog is always `GET /v1/models`.
 */
export type GonkaBrokerChatModelId =
  | 'MiniMaxAI/MiniMax-M2.7'
  | 'moonshotai/Kimi-K2.6'
  | (string & {});

export type GonkaBrokerCompletionModelId = string & {};
