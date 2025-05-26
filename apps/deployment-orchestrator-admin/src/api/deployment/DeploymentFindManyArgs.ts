import { DeploymentWhereInput } from "./DeploymentWhereInput";
import { DeploymentOrderByInput } from "./DeploymentOrderByInput";

export type DeploymentFindManyArgs = {
  where?: DeploymentWhereInput;
  orderBy?: Array<DeploymentOrderByInput>;
  skip?: number;
  take?: number;
};
