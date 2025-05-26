export type Session = {
  createdAt: Date;
  expiresAt: Date | null;
  id: string;
  token: string | null;
  updatedAt: Date;
  userProfile: string | null;
};
