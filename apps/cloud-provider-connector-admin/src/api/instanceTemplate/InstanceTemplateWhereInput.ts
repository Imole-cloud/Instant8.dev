import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type InstanceTemplateWhereInput = {
  cpu?: IntNullableFilter;
  hasGpu?: BooleanNullableFilter;
  id?: StringFilter;
  memoryGb?: IntNullableFilter;
  name?: StringNullableFilter;
  provider?: StringNullableFilter;
  region?: RegionWhereUniqueInput;
  storageGb?: IntNullableFilter;
};
