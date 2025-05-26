import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GcpConnectionWhereInput = {
  id?: StringFilter;
  projectId?: StringNullableFilter;
  region?: StringNullableFilter;
  serviceAccountJson?: StringNullableFilter;
  userProfile?: StringNullableFilter;
};
