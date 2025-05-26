import { SortOrder } from "../../util/SortOrder";

export type AzureConnectionOrderByInput = {
  clientId?: SortOrder;
  clientSecret?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  region?: SortOrder;
  subscriptionId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
  userProfile?: SortOrder;
};
