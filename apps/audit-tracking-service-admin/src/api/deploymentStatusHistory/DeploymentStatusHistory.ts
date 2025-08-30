export type DeploymentStatusHistory = {
  createdAt: Date;
  deployment: string | null;
  details: string | null;
  id: string;
  status: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
