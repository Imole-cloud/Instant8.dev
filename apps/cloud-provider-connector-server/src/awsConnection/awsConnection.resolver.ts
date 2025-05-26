import * as graphql from "@nestjs/graphql";
import { AwsConnectionResolverBase } from "./base/awsConnection.resolver.base";
import { AwsConnection } from "./base/AwsConnection";
import { AwsConnectionService } from "./awsConnection.service";

@graphql.Resolver(() => AwsConnection)
export class AwsConnectionResolver extends AwsConnectionResolverBase {
  constructor(protected readonly service: AwsConnectionService) {
    super(service);
  }
}
