import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstanceTemplateListRelationFilter } from "../instanceTemplate/InstanceTemplateListRelationFilter";

export type RegionWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  instanceTemplates?: InstanceTemplateListRelationFilter;
  name?: StringNullableFilter;
  provider?: StringNullableFilter;
};
