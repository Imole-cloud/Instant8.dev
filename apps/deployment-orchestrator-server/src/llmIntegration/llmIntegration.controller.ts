import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LlmIntegrationService } from "./llmIntegration.service";
import { LlmIntegrationControllerBase } from "./base/llmIntegration.controller.base";

@swagger.ApiTags("llmIntegrations")
@common.Controller("llmIntegrations")
export class LlmIntegrationController extends LlmIntegrationControllerBase {
  constructor(protected readonly service: LlmIntegrationService) {
    super(service);
  }
}
