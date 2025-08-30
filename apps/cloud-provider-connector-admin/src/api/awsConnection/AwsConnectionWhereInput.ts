import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AwsConnectionWhereInput = {
  accessKeyId?: StringNullableFilter;
  id?: StringFilter;
  region?: StringNullableFilter;
  secretAccessKey?: StringNullableFilter;
  sessionToken?: StringNullableFilter;
  userProfile?: StringNullableFilter;
};
