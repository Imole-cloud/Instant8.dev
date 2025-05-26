import { Module } from "@nestjs/common";
import { LlmIntegrationModuleBase } from "./base/llmIntegration.module.base";
import { LlmIntegrationService } from "./llmIntegration.service";
import { LlmIntegrationController } from "./llmIntegration.controller";
import { LlmIntegrationResolver } from "./llmIntegration.resolver";

@Module({
  imports: [LlmIntegrationModuleBase],
  controllers: [LlmIntegrationController],
  providers: [LlmIntegrationService, LlmIntegrationResolver],
  exports: [LlmIntegrationService],
})
export class LlmIntegrationModule {}
