import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Sessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiresAt" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userProfile" source="userProfile" />{" "}
      </Datagrid>
    </List>
  );
};
