import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="expiresAt" source="expiresAt" />
        <TextInput label="token" source="token" />
        <TextInput label="userProfile" source="userProfile" />
      </SimpleForm>
    </Edit>
  );
};
