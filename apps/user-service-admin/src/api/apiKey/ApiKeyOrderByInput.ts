import { SortOrder } from "../../util/SortOrder";

export type ApiKeyOrderByInput = {
  apiKey?: SortOrder;
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userProfile?: SortOrder;
};
