import { Module } from "@nestjs/common";
import { AzureConnectionModule } from "./azureConnection/azureConnection.module";
import { AwsConnectionModule } from "./awsConnection/awsConnection.module";
import { GcpConnectionModule } from "./gcpConnection/gcpConnection.module";
import { InstanceTemplateModule } from "./instanceTemplate/instanceTemplate.module";
import { ProviderLogModule } from "./providerLog/providerLog.module";
import { RegionModule } from "./region/region.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AzureConnectionModule,
    AwsConnectionModule,
    GcpConnectionModule,
    InstanceTemplateModule,
    ProviderLogModule,
    RegionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
