import { GcpConnectionWhereInput } from "./GcpConnectionWhereInput";
import { GcpConnectionOrderByInput } from "./GcpConnectionOrderByInput";

export type GcpConnectionFindManyArgs = {
  where?: GcpConnectionWhereInput;
  orderBy?: Array<GcpConnectionOrderByInput>;
  skip?: number;
  take?: number;
};
