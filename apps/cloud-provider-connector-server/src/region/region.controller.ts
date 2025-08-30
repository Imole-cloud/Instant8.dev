import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RegionService } from "./region.service";
import { RegionControllerBase } from "./base/region.controller.base";

@swagger.ApiTags("regions")
@common.Controller("regions")
export class RegionController extends RegionControllerBase {
  constructor(protected readonly service: RegionService) {
    super(service);
  }
}
