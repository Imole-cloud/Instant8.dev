import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const DeploymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Deployments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="autoTerminateAt" source="autoTerminateAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="environment" source="environment" />
        <TextField label="ID" source="id" />
        <TextField label="region" source="region" />
        <TextField label="requestPrompt" source="requestPrompt" />
        <TextField label="resolvedConfig" source="resolvedConfig" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="UserProfile"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
