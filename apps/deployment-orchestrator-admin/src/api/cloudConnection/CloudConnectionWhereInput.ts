import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type CloudConnectionWhereInput = {
  accessKey?: StringNullableFilter;
  id?: StringFilter;
  provider?: StringNullableFilter;
  region?: StringNullableFilter;
  userProfile?: UserProfileWhereUniqueInput;
};
