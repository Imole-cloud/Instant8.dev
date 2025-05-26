import { ResourceTag as TResourceTag } from "../api/resourceTag/ResourceTag";

export const RESOURCETAG_TITLE_FIELD = "key";

export const ResourceTagTitle = (record: TResourceTag): string => {
  return record.key?.toString() || String(record.id);
};
