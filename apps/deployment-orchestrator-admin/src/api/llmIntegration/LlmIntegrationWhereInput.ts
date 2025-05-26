import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromptHandlerWhereUniqueInput } from "../promptHandler/PromptHandlerWhereUniqueInput";

export type LlmIntegrationWhereInput = {
  apiEndpoint?: StringNullableFilter;
  apiKeyName?: StringNullableFilter;
  id?: StringFilter;
  modelUsed?: StringNullableFilter;
  promptHandler?: PromptHandlerWhereUniqueInput;
  provider?: StringNullableFilter;
};
