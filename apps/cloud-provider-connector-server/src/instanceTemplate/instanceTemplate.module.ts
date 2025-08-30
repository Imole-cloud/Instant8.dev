import { Module } from "@nestjs/common";
import { InstanceTemplateModuleBase } from "./base/instanceTemplate.module.base";
import { InstanceTemplateService } from "./instanceTemplate.service";
import { InstanceTemplateController } from "./instanceTemplate.controller";
import { InstanceTemplateResolver } from "./instanceTemplate.resolver";

@Module({
  imports: [InstanceTemplateModuleBase],
  controllers: [InstanceTemplateController],
  providers: [InstanceTemplateService, InstanceTemplateResolver],
  exports: [InstanceTemplateService],
})
export class InstanceTemplateModule {}
