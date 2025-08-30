import { AzureConnectionWhereInput } from "./AzureConnectionWhereInput";
import { AzureConnectionOrderByInput } from "./AzureConnectionOrderByInput";

export type AzureConnectionFindManyArgs = {
  where?: AzureConnectionWhereInput;
  orderBy?: Array<AzureConnectionOrderByInput>;
  skip?: number;
  take?: number;
};
