import { SortOrder } from "../../util/SortOrder";

export type LlmIntegrationOrderByInput = {
  apiEndpoint?: SortOrder;
  apiKeyName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  modelUsed?: SortOrder;
  promptHandlerId?: SortOrder;
  provider?: SortOrder;
  updatedAt?: SortOrder;
};
