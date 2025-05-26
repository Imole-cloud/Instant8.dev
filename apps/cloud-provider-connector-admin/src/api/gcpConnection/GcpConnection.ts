export type GcpConnection = {
  createdAt: Date;
  id: string;
  projectId: string | null;
  region: string | null;
  serviceAccountJson: string | null;
  updatedAt: Date;
  userProfile: string | null;
};
