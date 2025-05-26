import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AzureConnectionService } from "./azureConnection.service";
import { AzureConnectionControllerBase } from "./base/azureConnection.controller.base";

@swagger.ApiTags("azureConnections")
@common.Controller("azureConnections")
export class AzureConnectionController extends AzureConnectionControllerBase {
  constructor(protected readonly service: AzureConnectionService) {
    super(service);
  }
}
