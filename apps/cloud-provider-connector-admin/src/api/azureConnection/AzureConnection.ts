export type AzureConnection = {
  clientId: string | null;
  clientSecret: string | null;
  createdAt: Date;
  id: string;
  region: string | null;
  subscriptionId: string | null;
  tenantId: string | null;
  updatedAt: Date;
  userProfile: string | null;
};
