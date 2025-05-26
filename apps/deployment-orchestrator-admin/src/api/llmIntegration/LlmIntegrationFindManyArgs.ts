import { LlmIntegrationWhereInput } from "./LlmIntegrationWhereInput";
import { LlmIntegrationOrderByInput } from "./LlmIntegrationOrderByInput";

export type LlmIntegrationFindManyArgs = {
  where?: LlmIntegrationWhereInput;
  orderBy?: Array<LlmIntegrationOrderByInput>;
  skip?: number;
  take?: number;
};
