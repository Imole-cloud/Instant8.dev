import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ApiKeyWhereInput = {
  apiKey?: StringNullableFilter;
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
  userProfile?: StringNullableFilter;
};
