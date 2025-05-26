import { Region } from "../region/Region";

export type InstanceTemplate = {
  cpu: number | null;
  createdAt: Date;
  hasGpu: boolean | null;
  id: string;
  memoryGb: number | null;
  name: string | null;
  provider: string | null;
  region?: Region | null;
  storageGb: number | null;
  updatedAt: Date;
};
