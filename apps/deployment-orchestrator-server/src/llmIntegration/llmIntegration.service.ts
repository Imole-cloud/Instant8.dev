import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LlmIntegrationServiceBase } from "./base/llmIntegration.service.base";

@Injectable()
export class LlmIntegrationService extends LlmIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
