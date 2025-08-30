import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CloudConnectionServiceBase } from "./base/cloudConnection.service.base";

@Injectable()
export class CloudConnectionService extends CloudConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
