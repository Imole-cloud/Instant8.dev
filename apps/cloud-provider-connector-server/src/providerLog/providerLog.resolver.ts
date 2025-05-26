import * as graphql from "@nestjs/graphql";
import { ProviderLogResolverBase } from "./base/providerLog.resolver.base";
import { ProviderLog } from "./base/ProviderLog";
import { ProviderLogService } from "./providerLog.service";

@graphql.Resolver(() => ProviderLog)
export class ProviderLogResolver extends ProviderLogResolverBase {
  constructor(protected readonly service: ProviderLogService) {
    super(service);
  }
}
