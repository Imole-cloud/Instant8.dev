import { RegionWhereUniqueInput } from "./RegionWhereUniqueInput";
import { RegionUpdateInput } from "./RegionUpdateInput";

export type UpdateRegionArgs = {
  where: RegionWhereUniqueInput;
  data: RegionUpdateInput;
};
