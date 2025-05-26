import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResourceTagService } from "./resourceTag.service";
import { ResourceTagControllerBase } from "./base/resourceTag.controller.base";

@swagger.ApiTags("resourceTags")
@common.Controller("resourceTags")
export class ResourceTagController extends ResourceTagControllerBase {
  constructor(protected readonly service: ResourceTagService) {
    super(service);
  }
}
