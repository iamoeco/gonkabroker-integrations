import {
  createOpenAICompatible,
  type OpenAICompatibleProvider,
  type OpenAICompatibleProviderSettings,
} from '@ai-sdk/openai-compatible';
import type {
  GonkaBrokerChatModelId,
  GonkaBrokerCompletionModelId,
} from './gonkabroker-chat-settings';

const GONKABROKER_BASE_URL = 'https://proxy.gonkabroker.com/v1';

export interface GonkaBrokerProviderSettings
  extends Omit<OpenAICompatibleProviderSettings, 'name' | 'baseURL'> {
  /**
   * Base URL for the Gonka Broker API.
   * Defaults to `https://proxy.gonkabroker.com/v1`.
   */
  baseURL?: string;
}

export type GonkaBrokerProvider = OpenAICompatibleProvider<
  GonkaBrokerChatModelId,
  GonkaBrokerCompletionModelId,
  string,
  string
>;

/**
 * Create a Gonka Broker provider instance for the Vercel AI SDK.
 *
 * The API key is read from `options.apiKey`, falling back to the
 * `GONKABROKER_API_KEY` environment variable. Keys look like `gnk-prx-...`
 * and are issued in the app at https://gonkabroker.com.
 */
export function createGonkaBroker(
  options: GonkaBrokerProviderSettings = {},
): GonkaBrokerProvider {
  const apiKey =
    options.apiKey ??
    (typeof process !== 'undefined'
      ? process.env.GONKABROKER_API_KEY
      : undefined);

  return createOpenAICompatible<
    GonkaBrokerChatModelId,
    GonkaBrokerCompletionModelId,
    string,
    string
  >({
    name: 'gonkabroker',
    ...options,
    baseURL: options.baseURL ?? GONKABROKER_BASE_URL,
    apiKey,
  });
}

/**
 * Default Gonka Broker provider instance.
 * Reads the API key from the `GONKABROKER_API_KEY` environment variable.
 */
export const gonkabroker = createGonkaBroker();
