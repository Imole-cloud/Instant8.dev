import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AwsConnectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accessKeyId" source="accessKeyId" />
        <TextInput label="region" source="region" />
        <TextInput label="secretAccessKey" source="secretAccessKey" />
        <TextInput label="sessionToken" source="sessionToken" />
        <TextInput label="userProfile" source="userProfile" />
      </SimpleForm>
    </Edit>
  );
};
