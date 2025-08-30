import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  sshKey?: SortOrder;
  updatedAt?: SortOrder;
};
