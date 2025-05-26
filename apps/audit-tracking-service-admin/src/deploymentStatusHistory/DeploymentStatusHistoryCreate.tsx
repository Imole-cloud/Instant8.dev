import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DeploymentStatusHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="deployment" source="deployment" />
        <TextInput label="details" multiline source="details" />
        <TextInput label="status" source="status" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
