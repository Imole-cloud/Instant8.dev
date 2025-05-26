import { PromptHandlerUpdateManyWithoutDeploymentsInput } from "./PromptHandlerUpdateManyWithoutDeploymentsInput";
import { InputJsonValue } from "../../types";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type DeploymentUpdateInput = {
  autoTerminateAt?: Date | null;
  environment?: string | null;
  promptHandlers?: PromptHandlerUpdateManyWithoutDeploymentsInput;
  region?: string | null;
  requestPrompt?: string | null;
  resolvedConfig?: InputJsonValue;
  status?: "Option1" | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
