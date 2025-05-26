import { PromptHandlerWhereUniqueInput } from "../promptHandler/PromptHandlerWhereUniqueInput";

export type LlmIntegrationCreateInput = {
  apiEndpoint?: string | null;
  apiKeyName?: string | null;
  modelUsed?: string | null;
  promptHandler?: PromptHandlerWhereUniqueInput | null;
  provider?: string | null;
};
