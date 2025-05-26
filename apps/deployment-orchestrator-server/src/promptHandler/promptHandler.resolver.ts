import * as graphql from "@nestjs/graphql";
import { PromptHandlerResolverBase } from "./base/promptHandler.resolver.base";
import { PromptHandler } from "./base/PromptHandler";
import { PromptHandlerService } from "./promptHandler.service";

@graphql.Resolver(() => PromptHandler)
export class PromptHandlerResolver extends PromptHandlerResolverBase {
  constructor(protected readonly service: PromptHandlerService) {
    super(service);
  }
}
