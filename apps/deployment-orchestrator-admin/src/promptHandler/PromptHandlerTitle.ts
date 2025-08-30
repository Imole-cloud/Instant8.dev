import { PromptHandler as TPromptHandler } from "../api/promptHandler/PromptHandler";

export const PROMPTHANDLER_TITLE_FIELD = "detectedOs";

export const PromptHandlerTitle = (record: TPromptHandler): string => {
  return record.detectedOs?.toString() || String(record.id);
};
