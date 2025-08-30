import { AwsConnection as TAwsConnection } from "../api/awsConnection/AwsConnection";

export const AWSCONNECTION_TITLE_FIELD = "accessKeyId";

export const AwsConnectionTitle = (record: TAwsConnection): string => {
  return record.accessKeyId?.toString() || String(record.id);
};
