import { PromptHandlerWhereInput } from "./PromptHandlerWhereInput";
import { PromptHandlerOrderByInput } from "./PromptHandlerOrderByInput";

export type PromptHandlerFindManyArgs = {
  where?: PromptHandlerWhereInput;
  orderBy?: Array<PromptHandlerOrderByInput>;
  skip?: number;
  take?: number;
};
