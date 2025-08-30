import { InstanceTemplateWhereInput } from "./InstanceTemplateWhereInput";
import { InstanceTemplateOrderByInput } from "./InstanceTemplateOrderByInput";

export type InstanceTemplateFindManyArgs = {
  where?: InstanceTemplateWhereInput;
  orderBy?: Array<InstanceTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
