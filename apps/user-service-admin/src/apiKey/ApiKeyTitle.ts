import { ApiKey as TApiKey } from "../api/apiKey/ApiKey";

export const APIKEY_TITLE_FIELD = "apiKey";

export const ApiKeyTitle = (record: TApiKey): string => {
  return record.apiKey?.toString() || String(record.id);
};
