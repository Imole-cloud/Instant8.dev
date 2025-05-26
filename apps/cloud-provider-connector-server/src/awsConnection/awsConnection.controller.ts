import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AwsConnectionService } from "./awsConnection.service";
import { AwsConnectionControllerBase } from "./base/awsConnection.controller.base";

@swagger.ApiTags("awsConnections")
@common.Controller("awsConnections")
export class AwsConnectionController extends AwsConnectionControllerBase {
  constructor(protected readonly service: AwsConnectionService) {
    super(service);
  }
}
