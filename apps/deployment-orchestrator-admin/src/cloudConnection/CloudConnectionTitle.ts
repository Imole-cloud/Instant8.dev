import { CloudConnection as TCloudConnection } from "../api/cloudConnection/CloudConnection";

export const CLOUDCONNECTION_TITLE_FIELD = "accessKey";

export const CloudConnectionTitle = (record: TCloudConnection): string => {
  return record.accessKey?.toString() || String(record.id);
};
