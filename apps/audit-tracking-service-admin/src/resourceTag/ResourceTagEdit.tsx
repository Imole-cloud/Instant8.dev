import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ResourceTagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <TextInput label="resourceId" source="resourceId" />
        <TextInput label="resourceType" source="resourceType" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
