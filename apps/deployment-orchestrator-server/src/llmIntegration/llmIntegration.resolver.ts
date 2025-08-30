import * as graphql from "@nestjs/graphql";
import { LlmIntegrationResolverBase } from "./base/llmIntegration.resolver.base";
import { LlmIntegration } from "./base/LlmIntegration";
import { LlmIntegrationService } from "./llmIntegration.service";

@graphql.Resolver(() => LlmIntegration)
export class LlmIntegrationResolver extends LlmIntegrationResolverBase {
  constructor(protected readonly service: LlmIntegrationService) {
    super(service);
  }
}
