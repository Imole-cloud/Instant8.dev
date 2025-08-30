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
import { DeploymentController } from "../deployment.controller";
import { DeploymentService } from "../deployment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  autoTerminateAt: new Date(),
  createdAt: new Date(),
  environment: "exampleEnvironment",
  id: "exampleId",
  region: "exampleRegion",
  requestPrompt: "exampleRequestPrompt",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  autoTerminateAt: new Date(),
  createdAt: new Date(),
  environment: "exampleEnvironment",
  id: "exampleId",
  region: "exampleRegion",
  requestPrompt: "exampleRequestPrompt",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    autoTerminateAt: new Date(),
    createdAt: new Date(),
    environment: "exampleEnvironment",
    id: "exampleId",
    region: "exampleRegion",
    requestPrompt: "exampleRequestPrompt",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  autoTerminateAt: new Date(),
  createdAt: new Date(),
  environment: "exampleEnvironment",
  id: "exampleId",
  region: "exampleRegion",
  requestPrompt: "exampleRequestPrompt",
  updatedAt: new Date(),
};

const service = {
  createDeployment() {
    return CREATE_RESULT;
  },
  deployments: () => FIND_MANY_RESULT,
  deployment: ({ where }: { where: { id: string } }) => {
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

describe("Deployment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeploymentService,
          useValue: service,
        },
      ],
      controllers: [DeploymentController],
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

  test("POST /deployments", async () => {
    await request(app.getHttpServer())
      .post("/deployments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        autoTerminateAt: CREATE_RESULT.autoTerminateAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /deployments", async () => {
    await request(app.getHttpServer())
      .get("/deployments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          autoTerminateAt: FIND_MANY_RESULT[0].autoTerminateAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /deployments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deployments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /deployments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deployments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        autoTerminateAt: FIND_ONE_RESULT.autoTerminateAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /deployments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/deployments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        autoTerminateAt: CREATE_RESULT.autoTerminateAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/deployments")
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
