import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const DeploymentStatusHistoryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deployment" source="deployment" />
        <TextField label="details" source="details" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
