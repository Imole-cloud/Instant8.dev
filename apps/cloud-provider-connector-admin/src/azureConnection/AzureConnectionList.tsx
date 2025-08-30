import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AzureConnectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AzureConnections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="clientId" source="clientId" />
        <TextField label="clientSecret" source="clientSecret" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="region" source="region" />
        <TextField label="subscriptionId" source="subscriptionId" />
        <TextField label="tenantId" source="tenantId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userProfile" source="userProfile" />{" "}
      </Datagrid>
    </List>
  );
};
