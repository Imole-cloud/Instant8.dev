import { LlmIntegration as TLlmIntegration } from "../api/llmIntegration/LlmIntegration";

export const LLMINTEGRATION_TITLE_FIELD = "apiKeyName";

export const LlmIntegrationTitle = (record: TLlmIntegration): string => {
  return record.apiKeyName?.toString() || String(record.id);
};
