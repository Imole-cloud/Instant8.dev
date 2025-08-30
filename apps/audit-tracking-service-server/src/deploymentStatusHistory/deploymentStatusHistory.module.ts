import { Module } from "@nestjs/common";
import { DeploymentStatusHistoryModuleBase } from "./base/deploymentStatusHistory.module.base";
import { DeploymentStatusHistoryService } from "./deploymentStatusHistory.service";
import { DeploymentStatusHistoryController } from "./deploymentStatusHistory.controller";
import { DeploymentStatusHistoryResolver } from "./deploymentStatusHistory.resolver";

@Module({
  imports: [DeploymentStatusHistoryModuleBase],
  controllers: [DeploymentStatusHistoryController],
  providers: [DeploymentStatusHistoryService, DeploymentStatusHistoryResolver],
  exports: [DeploymentStatusHistoryService],
})
export class DeploymentStatusHistoryModule {}
