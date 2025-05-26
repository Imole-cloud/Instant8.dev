import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AuditLogWhereInput = {
  action?: StringNullableFilter;
  details?: JsonFilter;
  entity?: StringNullableFilter;
  entityId?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userProfile?: StringNullableFilter;
};
