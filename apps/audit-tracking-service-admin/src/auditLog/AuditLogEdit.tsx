import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AuditLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <div />
        <TextInput label="entity" source="entity" />
        <TextInput label="entityId" source="entityId" />
        <TextInput label="status" source="status" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="userProfile" source="userProfile" />
      </SimpleForm>
    </Edit>
  );
};
