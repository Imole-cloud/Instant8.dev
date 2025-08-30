import { UserProfile } from "../userProfile/UserProfile";

export type CloudConnection = {
  accessKey: string | null;
  createdAt: Date;
  id: string;
  provider: string | null;
  region: string | null;
  updatedAt: Date;
  userProfile?: UserProfile | null;
};
