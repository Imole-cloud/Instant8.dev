import { SortOrder } from "../../util/SortOrder";

export type ResourceTagOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  resourceId?: SortOrder;
  resourceType?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
