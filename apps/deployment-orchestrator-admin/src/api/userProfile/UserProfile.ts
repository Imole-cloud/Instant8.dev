import { CloudConnection } from "../cloudConnection/CloudConnection";
import { Deployment } from "../deployment/Deployment";

export type UserProfile = {
  cloudConnections?: Array<CloudConnection>;
  createdAt: Date;
  deployments?: Array<Deployment>;
  email: string | null;
  id: string;
  name: string | null;
  role: string | null;
  sshKey: string | null;
  updatedAt: Date;
};
