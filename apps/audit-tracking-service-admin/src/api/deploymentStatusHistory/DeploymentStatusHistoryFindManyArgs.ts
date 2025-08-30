import { DeploymentStatusHistoryWhereInput } from "./DeploymentStatusHistoryWhereInput";
import { DeploymentStatusHistoryOrderByInput } from "./DeploymentStatusHistoryOrderByInput";

export type DeploymentStatusHistoryFindManyArgs = {
  where?: DeploymentStatusHistoryWhereInput;
  orderBy?: Array<DeploymentStatusHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
