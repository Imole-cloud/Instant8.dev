import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ResourceTagWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  resourceId?: StringNullableFilter;
  resourceType?: StringNullableFilter;
  value?: StringNullableFilter;
};
