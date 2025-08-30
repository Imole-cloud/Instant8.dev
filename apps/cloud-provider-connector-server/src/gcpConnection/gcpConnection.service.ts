import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GcpConnectionServiceBase } from "./base/gcpConnection.service.base";

@Injectable()
export class GcpConnectionService extends GcpConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
