import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AzureConnectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="clientId" source="clientId" />
        <TextField label="clientSecret" source="clientSecret" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="region" source="region" />
        <TextField label="subscriptionId" source="subscriptionId" />
        <TextField label="tenantId" source="tenantId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userProfile" source="userProfile" />
      </SimpleShowLayout>
    </Show>
  );
};
