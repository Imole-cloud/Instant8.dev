import { InputJsonValue } from "../../types";

export type ProviderLogUpdateInput = {
  action?: string | null;
  provider?: string | null;
  request?: InputJsonValue;
  response?: InputJsonValue;
  status?: string | null;
  timestamp?: Date | null;
  userProfile?: string | null;
};
