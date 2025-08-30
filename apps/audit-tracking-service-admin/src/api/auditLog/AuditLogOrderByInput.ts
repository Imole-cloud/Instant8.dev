import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  entity?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userProfile?: SortOrder;
};
