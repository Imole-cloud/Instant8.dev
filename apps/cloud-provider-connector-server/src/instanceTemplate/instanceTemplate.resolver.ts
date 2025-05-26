import * as graphql from "@nestjs/graphql";
import { InstanceTemplateResolverBase } from "./base/instanceTemplate.resolver.base";
import { InstanceTemplate } from "./base/InstanceTemplate";
import { InstanceTemplateService } from "./instanceTemplate.service";

@graphql.Resolver(() => InstanceTemplate)
export class InstanceTemplateResolver extends InstanceTemplateResolverBase {
  constructor(protected readonly service: InstanceTemplateService) {
    super(service);
  }
}
