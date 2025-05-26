import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeploymentService } from "./deployment.service";
import { DeploymentControllerBase } from "./base/deployment.controller.base";

@swagger.ApiTags("deployments")
@common.Controller("deployments")
export class DeploymentController extends DeploymentControllerBase {
  constructor(protected readonly service: DeploymentService) {
    super(service);
  }
}
