import { CloudConnectionListRelationFilter } from "../cloudConnection/CloudConnectionListRelationFilter";
import { DeploymentListRelationFilter } from "../deployment/DeploymentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserProfileWhereInput = {
  cloudConnections?: CloudConnectionListRelationFilter;
  deployments?: DeploymentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  sshKey?: StringNullableFilter;
};
