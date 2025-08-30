import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "token";

export const SessionTitle = (record: TSession): string => {
  return record.token?.toString() || String(record.id);
};
