import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type InstanceTemplateUpdateInput = {
  cpu?: number | null;
  hasGpu?: boolean | null;
  memoryGb?: number | null;
  name?: string | null;
  provider?: string | null;
  region?: RegionWhereUniqueInput | null;
  storageGb?: number | null;
};
