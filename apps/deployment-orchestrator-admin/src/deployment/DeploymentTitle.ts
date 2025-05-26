import { Deployment as TDeployment } from "../api/deployment/Deployment";

export const DEPLOYMENT_TITLE_FIELD = "environment";

export const DeploymentTitle = (record: TDeployment): string => {
  return record.environment?.toString() || String(record.id);
};
