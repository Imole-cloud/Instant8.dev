import { InstanceTemplate } from "../instanceTemplate/InstanceTemplate";

export type Region = {
  createdAt: Date;
  description: string | null;
  id: string;
  instanceTemplates?: Array<InstanceTemplate>;
  name: string | null;
  provider: string | null;
  updatedAt: Date;
};
