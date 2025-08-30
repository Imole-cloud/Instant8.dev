import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AwsConnectionServiceBase } from "./base/awsConnection.service.base";

@Injectable()
export class AwsConnectionService extends AwsConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
