import { Deployment } from "../deployment/Deployment";
import { LlmIntegration } from "../llmIntegration/LlmIntegration";
import { JsonValue } from "type-fest";

export type PromptHandler = {
  createdAt: Date;
  deployment?: Deployment | null;
  detectedOs: string | null;
  id: string;
  inputPrompt: string | null;
  llmIntegrations?: Array<LlmIntegration>;
  parsedInstructions: JsonValue;
  resourcesRequested: JsonValue;
  updatedAt: Date;
};
