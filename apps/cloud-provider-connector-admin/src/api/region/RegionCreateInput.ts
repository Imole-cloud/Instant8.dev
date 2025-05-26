import { InstanceTemplateCreateNestedManyWithoutRegionsInput } from "./InstanceTemplateCreateNestedManyWithoutRegionsInput";

export type RegionCreateInput = {
  description?: string | null;
  instanceTemplates?: InstanceTemplateCreateNestedManyWithoutRegionsInput;
  name?: string | null;
  provider?: string | null;
};
