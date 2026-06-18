// API key helpers. Runtime secrets must be provided through environment variables.

export const API_KEYS = {
  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY || '',
  ANTHROPIC_BASE_URL: process.env.ANTHROPIC_BASE_URL || undefined,
};

export function getAnthropicApiKey() {
  return API_KEYS.ANTHROPIC_API_KEY;
}

export function validateAnthropicApiKey() {
  const apiKey = getAnthropicApiKey();
  return apiKey && apiKey.length > 0;
}

export function getAnthropicBaseURL() {
  return API_KEYS.ANTHROPIC_BASE_URL;
}
