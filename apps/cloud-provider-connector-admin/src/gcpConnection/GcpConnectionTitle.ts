import { GcpConnection as TGcpConnection } from "../api/gcpConnection/GcpConnection";

export const GCPCONNECTION_TITLE_FIELD = "projectId";

export const GcpConnectionTitle = (record: TGcpConnection): string => {
  return record.projectId?.toString() || String(record.id);
};
