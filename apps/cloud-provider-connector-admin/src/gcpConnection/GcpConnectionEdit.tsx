import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GcpConnectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
