import { DeploymentStatusHistory as TDeploymentStatusHistory } from "../api/deploymentStatusHistory/DeploymentStatusHistory";

export const DEPLOYMENTSTATUSHISTORY_TITLE_FIELD = "deployment";

export const DeploymentStatusHistoryTitle = (
  record: TDeploymentStatusHistory
): string => {
  return record.deployment?.toString() || String(record.id);
};
