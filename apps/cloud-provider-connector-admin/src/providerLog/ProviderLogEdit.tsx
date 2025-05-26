import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProviderLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="provider" source="provider" />
        <div />
        <div />
        <TextInput label="status" source="status" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="userProfile" source="userProfile" />
      </SimpleForm>
    </Edit>
  );
};
