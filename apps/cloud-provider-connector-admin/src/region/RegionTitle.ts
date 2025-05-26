import { Region as TRegion } from "../api/region/Region";

export const REGION_TITLE_FIELD = "name";

export const RegionTitle = (record: TRegion): string => {
  return record.name?.toString() || String(record.id);
};
