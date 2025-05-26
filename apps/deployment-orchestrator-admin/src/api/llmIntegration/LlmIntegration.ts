import { PromptHandler } from "../promptHandler/PromptHandler";

export type LlmIntegration = {
  apiEndpoint: string | null;
  apiKeyName: string | null;
  createdAt: Date;
  id: string;
  modelUsed: string | null;
  promptHandler?: PromptHandler | null;
  provider: string | null;
  updatedAt: Date;
};
