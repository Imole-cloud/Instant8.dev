import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AwsConnectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accessKeyId" source="accessKeyId" />
        <TextInput label="region" source="region" />
        <TextInput label="secretAccessKey" source="secretAccessKey" />
        <TextInput label="sessionToken" source="sessionToken" />
        <TextInput label="userProfile" source="userProfile" />
      </SimpleForm>
    </Create>
  );
};
