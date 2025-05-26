import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstanceTemplateService } from "./instanceTemplate.service";
import { InstanceTemplateControllerBase } from "./base/instanceTemplate.controller.base";

@swagger.ApiTags("instanceTemplates")
@common.Controller("instanceTemplates")
export class InstanceTemplateController extends InstanceTemplateControllerBase {
  constructor(protected readonly service: InstanceTemplateService) {
    super(service);
  }
}
