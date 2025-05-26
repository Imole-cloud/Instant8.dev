import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AzureConnectionWhereInput = {
  clientId?: StringNullableFilter;
  clientSecret?: StringNullableFilter;
  id?: StringFilter;
  region?: StringNullableFilter;
  subscriptionId?: StringNullableFilter;
  tenantId?: StringNullableFilter;
  userProfile?: StringNullableFilter;
};
