import { Module } from "@nestjs/common";
import { DeploymentModuleBase } from "./base/deployment.module.base";
import { DeploymentService } from "./deployment.service";
import { DeploymentController } from "./deployment.controller";
import { DeploymentResolver } from "./deployment.resolver";

@Module({
  imports: [DeploymentModuleBase],
  controllers: [DeploymentController],
  providers: [DeploymentService, DeploymentResolver],
  exports: [DeploymentService],
})
export class DeploymentModule {}
