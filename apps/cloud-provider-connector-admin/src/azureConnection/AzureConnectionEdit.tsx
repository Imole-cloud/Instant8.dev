import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AzureConnectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="clientId" source="clientId" />
        <TextInput label="clientSecret" source="clientSecret" />
        <TextInput label="region" source="region" />
        <TextInput label="subscriptionId" source="subscriptionId" />
        <TextInput label="tenantId" source="tenantId" />
        <TextInput label="userProfile" source="userProfile" />
      </SimpleForm>
    </Edit>
  );
};
