import { JsonValue } from "type-fest";

export type AuditLog = {
  action: string | null;
  createdAt: Date;
  details: JsonValue;
  entity: string | null;
  entityId: string | null;
  id: string;
  status: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  userProfile: string | null;
};
