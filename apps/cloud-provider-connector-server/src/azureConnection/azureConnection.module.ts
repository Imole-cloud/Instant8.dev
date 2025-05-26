import { Module } from "@nestjs/common";
import { AzureConnectionModuleBase } from "./base/azureConnection.module.base";
import { AzureConnectionService } from "./azureConnection.service";
import { AzureConnectionController } from "./azureConnection.controller";
import { AzureConnectionResolver } from "./azureConnection.resolver";

@Module({
  imports: [AzureConnectionModuleBase],
  controllers: [AzureConnectionController],
  providers: [AzureConnectionService, AzureConnectionResolver],
  exports: [AzureConnectionService],
})
export class AzureConnectionModule {}
