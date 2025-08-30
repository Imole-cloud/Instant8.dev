import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DeploymentStatusHistoryWhereInput = {
  deployment?: StringNullableFilter;
  details?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
