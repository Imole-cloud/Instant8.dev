import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeploymentStatusHistoryService } from "./deploymentStatusHistory.service";
import { DeploymentStatusHistoryControllerBase } from "./base/deploymentStatusHistory.controller.base";

@swagger.ApiTags("deploymentStatusHistories")
@common.Controller("deploymentStatusHistories")
export class DeploymentStatusHistoryController extends DeploymentStatusHistoryControllerBase {
  constructor(protected readonly service: DeploymentStatusHistoryService) {
    super(service);
  }
}
