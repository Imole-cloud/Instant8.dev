import { Module } from "@nestjs/common";
import { CloudConnectionModuleBase } from "./base/cloudConnection.module.base";
import { CloudConnectionService } from "./cloudConnection.service";
import { CloudConnectionController } from "./cloudConnection.controller";
import { CloudConnectionResolver } from "./cloudConnection.resolver";

@Module({
  imports: [CloudConnectionModuleBase],
  controllers: [CloudConnectionController],
  providers: [CloudConnectionService, CloudConnectionResolver],
  exports: [CloudConnectionService],
})
export class CloudConnectionModule {}
