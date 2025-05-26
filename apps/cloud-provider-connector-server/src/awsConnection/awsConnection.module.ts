import { Module } from "@nestjs/common";
import { AwsConnectionModuleBase } from "./base/awsConnection.module.base";
import { AwsConnectionService } from "./awsConnection.service";
import { AwsConnectionController } from "./awsConnection.controller";
import { AwsConnectionResolver } from "./awsConnection.resolver";

@Module({
  imports: [AwsConnectionModuleBase],
  controllers: [AwsConnectionController],
  providers: [AwsConnectionService, AwsConnectionResolver],
  exports: [AwsConnectionService],
})
export class AwsConnectionModule {}
