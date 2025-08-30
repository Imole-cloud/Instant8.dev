import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeploymentServiceBase } from "./base/deployment.service.base";

@Injectable()
export class DeploymentService extends DeploymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
