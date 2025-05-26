import { InstanceTemplateUpdateManyWithoutRegionsInput } from "./InstanceTemplateUpdateManyWithoutRegionsInput";

export type RegionUpdateInput = {
  description?: string | null;
  instanceTemplates?: InstanceTemplateUpdateManyWithoutRegionsInput;
  name?: string | null;
  provider?: string | null;
};
