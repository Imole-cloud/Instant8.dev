import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AuditLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <div />
        <TextInput label="entity" source="entity" />
        <TextInput label="entityId" source="entityId" />
        <TextInput label="status" source="status" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="userProfile" source="userProfile" />
      </SimpleForm>
    </Create>
  );
};
