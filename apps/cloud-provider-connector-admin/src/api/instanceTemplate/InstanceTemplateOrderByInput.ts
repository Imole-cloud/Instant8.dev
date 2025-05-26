import { SortOrder } from "../../util/SortOrder";

export type InstanceTemplateOrderByInput = {
  cpu?: SortOrder;
  createdAt?: SortOrder;
  hasGpu?: SortOrder;
  id?: SortOrder;
  memoryGb?: SortOrder;
  name?: SortOrder;
  provider?: SortOrder;
  regionId?: SortOrder;
  storageGb?: SortOrder;
  updatedAt?: SortOrder;
};
