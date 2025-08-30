import { DeploymentWhereUniqueInput } from "../deployment/DeploymentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LlmIntegrationListRelationFilter } from "../llmIntegration/LlmIntegrationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PromptHandlerWhereInput = {
  deployment?: DeploymentWhereUniqueInput;
  detectedOs?: StringNullableFilter;
  id?: StringFilter;
  inputPrompt?: StringNullableFilter;
  llmIntegrations?: LlmIntegrationListRelationFilter;
  parsedInstructions?: JsonFilter;
  resourcesRequested?: JsonFilter;
};
