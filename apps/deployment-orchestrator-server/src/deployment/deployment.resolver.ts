import * as graphql from "@nestjs/graphql";
import { DeploymentResolverBase } from "./base/deployment.resolver.base";
import { Deployment } from "./base/Deployment";
import { DeploymentService } from "./deployment.service";

@graphql.Resolver(() => Deployment)
export class DeploymentResolver extends DeploymentResolverBase {
  constructor(protected readonly service: DeploymentService) {
    super(service);
  }
}
