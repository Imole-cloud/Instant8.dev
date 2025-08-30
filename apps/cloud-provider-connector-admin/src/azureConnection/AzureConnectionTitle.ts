import { AzureConnection as TAzureConnection } from "../api/azureConnection/AzureConnection";

export const AZURECONNECTION_TITLE_FIELD = "clientId";

export const AzureConnectionTitle = (record: TAzureConnection): string => {
  return record.clientId?.toString() || String(record.id);
};
