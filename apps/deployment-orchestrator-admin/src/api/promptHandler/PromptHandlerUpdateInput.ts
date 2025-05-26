import { DeploymentWhereUniqueInput } from "../deployment/DeploymentWhereUniqueInput";
import { LlmIntegrationUpdateManyWithoutPromptHandlersInput } from "./LlmIntegrationUpdateManyWithoutPromptHandlersInput";
import { InputJsonValue } from "../../types";

export type PromptHandlerUpdateInput = {
  deployment?: DeploymentWhereUniqueInput | null;
  detectedOs?: string | null;
  inputPrompt?: string | null;
  llmIntegrations?: LlmIntegrationUpdateManyWithoutPromptHandlersInput;
  parsedInstructions?: InputJsonValue;
  resourcesRequested?: InputJsonValue;
};
