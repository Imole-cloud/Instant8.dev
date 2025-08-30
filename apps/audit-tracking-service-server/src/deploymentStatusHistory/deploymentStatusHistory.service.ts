import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeploymentStatusHistoryServiceBase } from "./base/deploymentStatusHistory.service.base";

@Injectable()
export class DeploymentStatusHistoryService extends DeploymentStatusHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
