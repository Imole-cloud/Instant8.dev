import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GcpConnectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GCPConnections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="projectId" source="projectId" />
        <TextField label="region" source="region" />
        <TextField label="serviceAccountJson" source="serviceAccountJson" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userProfile" source="userProfile" />{" "}
      </Datagrid>
    </List>
  );
};
