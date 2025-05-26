import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AzureConnectionController } from "../azureConnection.controller";
import { AzureConnectionService } from "../azureConnection.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  clientId: "exampleClientId",
  clientSecret: "exampleClientSecret",
  createdAt: new Date(),
  id: "exampleId",
  region: "exampleRegion",
  subscriptionId: "exampleSubscriptionId",
  tenantId: "exampleTenantId",
  updatedAt: new Date(),
  userProfile: "exampleUserProfile",
};
const CREATE_RESULT = {
  clientId: "exampleClientId",
  clientSecret: "exampleClientSecret",
  createdAt: new Date(),
  id: "exampleId",
  region: "exampleRegion",
  subscriptionId: "exampleSubscriptionId",
  tenantId: "exampleTenantId",
  updatedAt: new Date(),
  userProfile: "exampleUserProfile",
};
const FIND_MANY_RESULT = [
  {
    clientId: "exampleClientId",
    clientSecret: "exampleClientSecret",
    createdAt: new Date(),
    id: "exampleId",
    region: "exampleRegion",
    subscriptionId: "exampleSubscriptionId",
    tenantId: "exampleTenantId",
    updatedAt: new Date(),
    userProfile: "exampleUserProfile",
  },
];
const FIND_ONE_RESULT = {
  clientId: "exampleClientId",
  clientSecret: "exampleClientSecret",
  createdAt: new Date(),
  id: "exampleId",
  region: "exampleRegion",
  subscriptionId: "exampleSubscriptionId",
  tenantId: "exampleTenantId",
  updatedAt: new Date(),
  userProfile: "exampleUserProfile",
};

const service = {
  createAzureConnection() {
    return CREATE_RESULT;
  },
  azureConnections: () => FIND_MANY_RESULT,
  azureConnection: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AzureConnection", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AzureConnectionService,
          useValue: service,
        },
      ],
      controllers: [AzureConnectionController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /azureConnections", async () => {
    await request(app.getHttpServer())
      .post("/azureConnections")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /azureConnections", async () => {
    await request(app.getHttpServer())
      .get("/azureConnections")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /azureConnections/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/azureConnections"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /azureConnections/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/azureConnections"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /azureConnections existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/azureConnections")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/azureConnections")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
