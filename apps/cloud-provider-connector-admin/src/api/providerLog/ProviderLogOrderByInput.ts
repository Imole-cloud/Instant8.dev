import { SortOrder } from "../../util/SortOrder";

export type ProviderLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  provider?: SortOrder;
  request?: SortOrder;
  response?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userProfile?: SortOrder;
};
