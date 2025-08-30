import { RegionWhereInput } from "./RegionWhereInput";
import { RegionOrderByInput } from "./RegionOrderByInput";

export type RegionFindManyArgs = {
  where?: RegionWhereInput;
  orderBy?: Array<RegionOrderByInput>;
  skip?: number;
  take?: number;
};
