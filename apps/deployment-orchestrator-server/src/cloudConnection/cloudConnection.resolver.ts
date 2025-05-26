import * as graphql from "@nestjs/graphql";
import { CloudConnectionResolverBase } from "./base/cloudConnection.resolver.base";
import { CloudConnection } from "./base/CloudConnection";
import { CloudConnectionService } from "./cloudConnection.service";

@graphql.Resolver(() => CloudConnection)
export class CloudConnectionResolver extends CloudConnectionResolverBase {
  constructor(protected readonly service: CloudConnectionService) {
    super(service);
  }
}
