import { SortOrder } from "../../util/SortOrder";

export type DeploymentOrderByInput = {
  autoTerminateAt?: SortOrder;
  createdAt?: SortOrder;
  environment?: SortOrder;
  id?: SortOrder;
  region?: SortOrder;
  requestPrompt?: SortOrder;
  resolvedConfig?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userProfileId?: SortOrder;
};
