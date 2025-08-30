import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProviderLogService } from "./providerLog.service";
import { ProviderLogControllerBase } from "./base/providerLog.controller.base";

@swagger.ApiTags("providerLogs")
@common.Controller("providerLogs")
export class ProviderLogController extends ProviderLogControllerBase {
  constructor(protected readonly service: ProviderLogService) {
    super(service);
  }
}
