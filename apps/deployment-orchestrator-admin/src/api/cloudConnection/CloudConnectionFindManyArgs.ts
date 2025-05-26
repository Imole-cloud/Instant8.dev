import { CloudConnectionWhereInput } from "./CloudConnectionWhereInput";
import { CloudConnectionOrderByInput } from "./CloudConnectionOrderByInput";

export type CloudConnectionFindManyArgs = {
  where?: CloudConnectionWhereInput;
  orderBy?: Array<CloudConnectionOrderByInput>;
  skip?: number;
  take?: number;
};
