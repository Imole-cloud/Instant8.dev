import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AwsConnectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AWSConnections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="accessKeyId" source="accessKeyId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="region" source="region" />
        <TextField label="secretAccessKey" source="secretAccessKey" />
        <TextField label="sessionToken" source="sessionToken" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userProfile" source="userProfile" />{" "}
      </Datagrid>
    </List>
  );
};
