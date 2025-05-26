import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CloudConnectionService } from "./cloudConnection.service";
import { CloudConnectionControllerBase } from "./base/cloudConnection.controller.base";

@swagger.ApiTags("cloudConnections")
@common.Controller("cloudConnections")
export class CloudConnectionController extends CloudConnectionControllerBase {
  constructor(protected readonly service: CloudConnectionService) {
    super(service);
  }
}
