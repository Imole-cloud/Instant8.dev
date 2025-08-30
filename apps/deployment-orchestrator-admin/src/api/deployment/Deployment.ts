import { PromptHandler } from "../promptHandler/PromptHandler";
import { JsonValue } from "type-fest";
import { UserProfile } from "../userProfile/UserProfile";

export type Deployment = {
  autoTerminateAt: Date | null;
  createdAt: Date;
  environment: string | null;
  id: string;
  promptHandlers?: Array<PromptHandler>;
  region: string | null;
  requestPrompt: string | null;
  resolvedConfig: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
  userProfile?: UserProfile | null;
};
