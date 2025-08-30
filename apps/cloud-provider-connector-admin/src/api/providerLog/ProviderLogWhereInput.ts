import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProviderLogWhereInput = {
  action?: StringNullableFilter;
  id?: StringFilter;
  provider?: StringNullableFilter;
  request?: JsonFilter;
  response?: JsonFilter;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userProfile?: StringNullableFilter;
};
