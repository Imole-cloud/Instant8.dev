import { SortOrder } from "../../util/SortOrder";

export type PromptHandlerOrderByInput = {
  createdAt?: SortOrder;
  deploymentId?: SortOrder;
  detectedOs?: SortOrder;
  id?: SortOrder;
  inputPrompt?: SortOrder;
  parsedInstructions?: SortOrder;
  resourcesRequested?: SortOrder;
  updatedAt?: SortOrder;
};
