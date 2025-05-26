import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type CloudConnectionCreateInput = {
  accessKey?: string | null;
  provider?: string | null;
  region?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
