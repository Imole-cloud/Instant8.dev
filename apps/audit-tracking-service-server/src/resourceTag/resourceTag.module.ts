import { Module } from "@nestjs/common";
import { ResourceTagModuleBase } from "./base/resourceTag.module.base";
import { ResourceTagService } from "./resourceTag.service";
import { ResourceTagController } from "./resourceTag.controller";
import { ResourceTagResolver } from "./resourceTag.resolver";

@Module({
  imports: [ResourceTagModuleBase],
  controllers: [ResourceTagController],
  providers: [ResourceTagService, ResourceTagResolver],
  exports: [ResourceTagService],
})
export class ResourceTagModule {}
