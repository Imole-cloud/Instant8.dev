import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AuditLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AuditLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="action" source="action" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="details" source="details" />
        <TextField label="entity" source="entity" />
        <TextField label="entityId" source="entityId" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userProfile" source="userProfile" />{" "}
      </Datagrid>
    </List>
  );
};
