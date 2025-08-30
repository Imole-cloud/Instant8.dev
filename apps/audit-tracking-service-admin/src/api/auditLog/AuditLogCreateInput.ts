import { InputJsonValue } from "../../types";

export type AuditLogCreateInput = {
  action?: string | null;
  details?: InputJsonValue;
  entity?: string | null;
  entityId?: string | null;
  status?: string | null;
  timestamp?: Date | null;
  userProfile?: string | null;
};
