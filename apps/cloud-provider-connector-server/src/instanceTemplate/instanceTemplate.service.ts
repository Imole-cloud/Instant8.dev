import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstanceTemplateServiceBase } from "./base/instanceTemplate.service.base";

@Injectable()
export class InstanceTemplateService extends InstanceTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
