import { InstanceTemplate as TInstanceTemplate } from "../api/instanceTemplate/InstanceTemplate";

export const INSTANCETEMPLATE_TITLE_FIELD = "name";

export const InstanceTemplateTitle = (record: TInstanceTemplate): string => {
  return record.name?.toString() || String(record.id);
};
