import * as graphql from "@nestjs/graphql";
import { DeploymentStatusHistoryResolverBase } from "./base/deploymentStatusHistory.resolver.base";
import { DeploymentStatusHistory } from "./base/DeploymentStatusHistory";
import { DeploymentStatusHistoryService } from "./deploymentStatusHistory.service";

@graphql.Resolver(() => DeploymentStatusHistory)
export class DeploymentStatusHistoryResolver extends DeploymentStatusHistoryResolverBase {
  constructor(protected readonly service: DeploymentStatusHistoryService) {
    super(service);
  }
}
