import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type CloudConnectionUpdateInput = {
  accessKey?: string | null;
  provider?: string | null;
  region?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
