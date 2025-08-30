import { AwsConnectionWhereInput } from "./AwsConnectionWhereInput";
import { AwsConnectionOrderByInput } from "./AwsConnectionOrderByInput";

export type AwsConnectionFindManyArgs = {
  where?: AwsConnectionWhereInput;
  orderBy?: Array<AwsConnectionOrderByInput>;
  skip?: number;
  take?: number;
};
