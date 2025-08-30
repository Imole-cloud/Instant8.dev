import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  permissions?: JsonFilter;
};
