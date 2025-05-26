import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResourceTagServiceBase } from "./base/resourceTag.service.base";

@Injectable()
export class ResourceTagService extends ResourceTagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
