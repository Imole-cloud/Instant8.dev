import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromptHandlerService } from "./promptHandler.service";
import { PromptHandlerControllerBase } from "./base/promptHandler.controller.base";

@swagger.ApiTags("promptHandlers")
@common.Controller("promptHandlers")
export class PromptHandlerController extends PromptHandlerControllerBase {
  constructor(protected readonly service: PromptHandlerService) {
    super(service);
  }
}
