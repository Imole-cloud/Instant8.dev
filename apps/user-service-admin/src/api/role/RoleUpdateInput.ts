import { InputJsonValue } from "../../types";

export type RoleUpdateInput = {
  name?: string | null;
  permissions?: InputJsonValue;
};
