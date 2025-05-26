import { Module } from "@nestjs/common";
import { PromptHandlerModuleBase } from "./base/promptHandler.module.base";
import { PromptHandlerService } from "./promptHandler.service";
import { PromptHandlerController } from "./promptHandler.controller";
import { PromptHandlerResolver } from "./promptHandler.resolver";

@Module({
  imports: [PromptHandlerModuleBase],
  controllers: [PromptHandlerController],
  providers: [PromptHandlerService, PromptHandlerResolver],
  exports: [PromptHandlerService],
})
export class PromptHandlerModule {}
