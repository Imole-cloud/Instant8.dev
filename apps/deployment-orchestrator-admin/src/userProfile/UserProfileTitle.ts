import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "name";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.name?.toString() || String(record.id);
};
