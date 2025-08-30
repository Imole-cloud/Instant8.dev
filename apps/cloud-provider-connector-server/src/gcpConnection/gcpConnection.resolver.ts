import * as graphql from "@nestjs/graphql";
import { GcpConnectionResolverBase } from "./base/gcpConnection.resolver.base";
import { GcpConnection } from "./base/GcpConnection";
import { GcpConnectionService } from "./gcpConnection.service";

@graphql.Resolver(() => GcpConnection)
export class GcpConnectionResolver extends GcpConnectionResolverBase {
  constructor(protected readonly service: GcpConnectionService) {
    super(service);
  }
}
