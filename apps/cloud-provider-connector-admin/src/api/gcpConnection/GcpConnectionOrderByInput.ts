import { SortOrder } from "../../util/SortOrder";

export type GcpConnectionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  region?: SortOrder;
  serviceAccountJson?: SortOrder;
  updatedAt?: SortOrder;
  userProfile?: SortOrder;
};
