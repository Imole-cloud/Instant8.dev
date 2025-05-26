import { ProviderLog as TProviderLog } from "../api/providerLog/ProviderLog";

export const PROVIDERLOG_TITLE_FIELD = "action";

export const ProviderLogTitle = (record: TProviderLog): string => {
  return record.action?.toString() || String(record.id);
};
