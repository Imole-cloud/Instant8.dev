import { SortOrder } from "../../util/SortOrder";

export type DeploymentStatusHistoryOrderByInput = {
  createdAt?: SortOrder;
  deployment?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
