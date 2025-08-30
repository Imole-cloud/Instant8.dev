import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromptHandlerListRelationFilter } from "../promptHandler/PromptHandlerListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type DeploymentWhereInput = {
  autoTerminateAt?: DateTimeNullableFilter;
  environment?: StringNullableFilter;
  id?: StringFilter;
  promptHandlers?: PromptHandlerListRelationFilter;
  region?: StringNullableFilter;
  requestPrompt?: StringNullableFilter;
  resolvedConfig?: JsonFilter;
  status?: "Option1";
  userProfile?: UserProfileWhereUniqueInput;
};
