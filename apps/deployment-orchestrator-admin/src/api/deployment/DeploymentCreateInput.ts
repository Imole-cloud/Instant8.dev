import { PromptHandlerCreateNestedManyWithoutDeploymentsInput } from "./PromptHandlerCreateNestedManyWithoutDeploymentsInput";
import { InputJsonValue } from "../../types";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type DeploymentCreateInput = {
  autoTerminateAt?: Date | null;
  environment?: string | null;
  promptHandlers?: PromptHandlerCreateNestedManyWithoutDeploymentsInput;
  region?: string | null;
  requestPrompt?: string | null;
  resolvedConfig?: InputJsonValue;
  status?: "Option1" | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
