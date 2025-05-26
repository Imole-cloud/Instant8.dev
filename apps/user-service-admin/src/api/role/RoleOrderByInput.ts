import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  permissions?: SortOrder;
  updatedAt?: SortOrder;
};
