import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AzureConnectionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="clientId" source="clientId" />
        <TextInput label="clientSecret" source="clientSecret" />
        <TextInput label="region" source="region" />
        <TextInput label="subscriptionId" source="subscriptionId" />
        <TextInput label="tenantId" source="tenantId" />
        <TextInput label="userProfile" source="userProfile" />
      </SimpleForm>
    </Create>
  );
};
