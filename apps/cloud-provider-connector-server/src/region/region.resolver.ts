import * as graphql from "@nestjs/graphql";
import { RegionResolverBase } from "./base/region.resolver.base";
import { Region } from "./base/Region";
import { RegionService } from "./region.service";

@graphql.Resolver(() => Region)
export class RegionResolver extends RegionResolverBase {
  constructor(protected readonly service: RegionService) {
    super(service);
  }
}
