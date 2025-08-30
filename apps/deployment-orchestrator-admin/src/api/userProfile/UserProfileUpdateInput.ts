import { CloudConnectionUpdateManyWithoutUserProfilesInput } from "./CloudConnectionUpdateManyWithoutUserProfilesInput";
import { DeploymentUpdateManyWithoutUserProfilesInput } from "./DeploymentUpdateManyWithoutUserProfilesInput";

export type UserProfileUpdateInput = {
  cloudConnections?: CloudConnectionUpdateManyWithoutUserProfilesInput;
  deployments?: DeploymentUpdateManyWithoutUserProfilesInput;
  email?: string | null;
  name?: string | null;
  role?: string | null;
  sshKey?: string | null;
};
