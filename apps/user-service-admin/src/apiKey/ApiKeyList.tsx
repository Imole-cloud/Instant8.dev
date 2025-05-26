import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApiKeyList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"ApiKeys"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="apiKey" source="apiKey" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiresAt" source="expiresAt" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userProfile" source="userProfile" />{" "}
      </Datagrid>
    </List>
  );
};
