import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ResourceTagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <TextInput label="resourceId" source="resourceId" />
        <TextInput label="resourceType" source="resourceType" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
