export type ApiKey = {
  apiKey: string | null;
  createdAt: Date;
  expiresAt: Date | null;
  id: string;
  updatedAt: Date;
  userProfile: string | null;
};
