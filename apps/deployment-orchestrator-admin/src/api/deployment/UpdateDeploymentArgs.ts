import { DeploymentWhereUniqueInput } from "./DeploymentWhereUniqueInput";
import { DeploymentUpdateInput } from "./DeploymentUpdateInput";

export type UpdateDeploymentArgs = {
  where: DeploymentWhereUniqueInput;
  data: DeploymentUpdateInput;
};
