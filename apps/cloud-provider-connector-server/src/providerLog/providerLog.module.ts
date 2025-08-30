import { Module } from "@nestjs/common";
import { ProviderLogModuleBase } from "./base/providerLog.module.base";
import { ProviderLogService } from "./providerLog.service";
import { ProviderLogController } from "./providerLog.controller";
import { ProviderLogResolver } from "./providerLog.resolver";

@Module({
  imports: [ProviderLogModuleBase],
  controllers: [ProviderLogController],
  providers: [ProviderLogService, ProviderLogResolver],
  exports: [ProviderLogService],
})
export class ProviderLogModule {}
