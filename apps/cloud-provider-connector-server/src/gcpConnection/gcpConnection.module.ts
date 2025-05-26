import { Module } from "@nestjs/common";
import { GcpConnectionModuleBase } from "./base/gcpConnection.module.base";
import { GcpConnectionService } from "./gcpConnection.service";
import { GcpConnectionController } from "./gcpConnection.controller";
import { GcpConnectionResolver } from "./gcpConnection.resolver";

@Module({
  imports: [GcpConnectionModuleBase],
  controllers: [GcpConnectionController],
  providers: [GcpConnectionService, GcpConnectionResolver],
  exports: [GcpConnectionService],
})
export class GcpConnectionModule {}
