import { SortOrder } from "../../util/SortOrder";

export type CloudConnectionOrderByInput = {
  accessKey?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  provider?: SortOrder;
  region?: SortOrder;
  updatedAt?: SortOrder;
  userProfileId?: SortOrder;
};
