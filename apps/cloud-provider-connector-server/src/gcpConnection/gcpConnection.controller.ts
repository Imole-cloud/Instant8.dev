import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GcpConnectionService } from "./gcpConnection.service";
import { GcpConnectionControllerBase } from "./base/gcpConnection.controller.base";

@swagger.ApiTags("gcpConnections")
@common.Controller("gcpConnections")
export class GcpConnectionController extends GcpConnectionControllerBase {
  constructor(protected readonly service: GcpConnectionService) {
    super(service);
  }
}
