import { CloudConnectionCreateNestedManyWithoutUserProfilesInput } from "./CloudConnectionCreateNestedManyWithoutUserProfilesInput";
import { DeploymentCreateNestedManyWithoutUserProfilesInput } from "./DeploymentCreateNestedManyWithoutUserProfilesInput";

export type UserProfileCreateInput = {
  cloudConnections?: CloudConnectionCreateNestedManyWithoutUserProfilesInput;
  deployments?: DeploymentCreateNestedManyWithoutUserProfilesInput;
  email?: string | null;
  name?: string | null;
  role?: string | null;
  sshKey?: string | null;
};
