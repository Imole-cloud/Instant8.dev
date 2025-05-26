import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AzureConnectionServiceBase } from "./base/azureConnection.service.base";

@Injectable()
export class AzureConnectionService extends AzureConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
