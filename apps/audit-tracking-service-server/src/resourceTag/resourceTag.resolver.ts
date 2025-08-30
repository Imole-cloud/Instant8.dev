import * as graphql from "@nestjs/graphql";
import { ResourceTagResolverBase } from "./base/resourceTag.resolver.base";
import { ResourceTag } from "./base/ResourceTag";
import { ResourceTagService } from "./resourceTag.service";

@graphql.Resolver(() => ResourceTag)
export class ResourceTagResolver extends ResourceTagResolverBase {
  constructor(protected readonly service: ResourceTagService) {
    super(service);
  }
}
