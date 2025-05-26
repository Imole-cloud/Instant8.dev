import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromptHandlerServiceBase } from "./base/promptHandler.service.base";

@Injectable()
export class PromptHandlerService extends PromptHandlerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
