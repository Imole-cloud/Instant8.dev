import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SessionWhereInput = {
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
  token?: StringNullableFilter;
  userProfile?: StringNullableFilter;
};
