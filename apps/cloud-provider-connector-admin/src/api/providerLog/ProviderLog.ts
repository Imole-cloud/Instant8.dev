import { JsonValue } from "type-fest";

export type ProviderLog = {
  action: string | null;
  createdAt: Date;
  id: string;
  provider: string | null;
  request: JsonValue;
  response: JsonValue;
  status: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  userProfile: string | null;
};
