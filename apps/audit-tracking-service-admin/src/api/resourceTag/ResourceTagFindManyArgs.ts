import { ResourceTagWhereInput } from "./ResourceTagWhereInput";
import { ResourceTagOrderByInput } from "./ResourceTagOrderByInput";

export type ResourceTagFindManyArgs = {
  where?: ResourceTagWhereInput;
  orderBy?: Array<ResourceTagOrderByInput>;
  skip?: number;
  take?: number;
};
