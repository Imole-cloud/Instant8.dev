import { InputJsonValue } from "../../types";

export type RoleCreateInput = {
  name?: string | null;
  permissions?: InputJsonValue;
};
