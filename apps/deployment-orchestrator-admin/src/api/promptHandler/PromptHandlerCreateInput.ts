import { DeploymentWhereUniqueInput } from "../deployment/DeploymentWhereUniqueInput";
import { LlmIntegrationCreateNestedManyWithoutPromptHandlersInput } from "./LlmIntegrationCreateNestedManyWithoutPromptHandlersInput";
import { InputJsonValue } from "../../types";

export type PromptHandlerCreateInput = {
  deployment?: DeploymentWhereUniqueInput | null;
  detectedOs?: string | null;
  inputPrompt?: string | null;
  llmIntegrations?: LlmIntegrationCreateNestedManyWithoutPromptHandlersInput;
  parsedInstructions?: InputJsonValue;
  resourcesRequested?: InputJsonValue;
};
