import { SortOrder } from "../../util/SortOrder";

export type AwsConnectionOrderByInput = {
  accessKeyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  region?: SortOrder;
  secretAccessKey?: SortOrder;
  sessionToken?: SortOrder;
  updatedAt?: SortOrder;
  userProfile?: SortOrder;
};
