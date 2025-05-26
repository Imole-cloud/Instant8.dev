import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GcpConnectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="projectId" source="projectId" />
        <TextInput label="region" source="region" />
        <TextInput
          label="serviceAccountJson"
          multiline
          source="serviceAccountJson"
        />
        <TextInput label="userProfile" source="userProfile" />
      </SimpleForm>
    </Create>
  );
};
