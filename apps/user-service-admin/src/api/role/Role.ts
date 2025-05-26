import { JsonValue } from "type-fest";

export type Role = {
  createdAt: Date;
  id: string;
  name: string | null;
  permissions: JsonValue;
  updatedAt: Date;
};
