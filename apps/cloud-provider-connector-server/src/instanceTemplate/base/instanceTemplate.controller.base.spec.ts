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
import { InstanceTemplateController } from "../instanceTemplate.controller";
import { InstanceTemplateService } from "../instanceTemplate.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cpu: 42,
  createdAt: new Date(),
  hasGpu: "true",
  id: "exampleId",
  memoryGb: 42,
  name: "exampleName",
  provider: "exampleProvider",
  storageGb: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cpu: 42,
  createdAt: new Date(),
  hasGpu: "true",
  id: "exampleId",
  memoryGb: 42,
  name: "exampleName",
  provider: "exampleProvider",
  storageGb: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cpu: 42,
    createdAt: new Date(),
    hasGpu: "true",
    id: "exampleId",
    memoryGb: 42,
    name: "exampleName",
    provider: "exampleProvider",
    storageGb: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cpu: 42,
  createdAt: new Date(),
  hasGpu: "true",
  id: "exampleId",
  memoryGb: 42,
  name: "exampleName",
  provider: "exampleProvider",
  storageGb: 42,
  updatedAt: new Date(),
};

const service = {
  createInstanceTemplate() {
    return CREATE_RESULT;
  },
  instanceTemplates: () => FIND_MANY_RESULT,
  instanceTemplate: ({ where }: { where: { id: string } }) => {
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

describe("InstanceTemplate", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InstanceTemplateService,
          useValue: service,
        },
      ],
      controllers: [InstanceTemplateController],
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

  test("POST /instanceTemplates", async () => {
    await request(app.getHttpServer())
      .post("/instanceTemplates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /instanceTemplates", async () => {
    await request(app.getHttpServer())
      .get("/instanceTemplates")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /instanceTemplates/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/instanceTemplates"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /instanceTemplates/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/instanceTemplates"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /instanceTemplates existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/instanceTemplates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/instanceTemplates")
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
