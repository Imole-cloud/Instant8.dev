import * as graphql from "@nestjs/graphql";
import { AzureConnectionResolverBase } from "./base/azureConnection.resolver.base";
import { AzureConnection } from "./base/AzureConnection";
import { AzureConnectionService } from "./azureConnection.service";

@graphql.Resolver(() => AzureConnection)
export class AzureConnectionResolver extends AzureConnectionResolverBase {
  constructor(protected readonly service: AzureConnectionService) {
    super(service);
  }
}
