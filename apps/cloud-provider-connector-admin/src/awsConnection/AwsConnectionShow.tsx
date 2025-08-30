import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AwsConnectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accessKeyId" source="accessKeyId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="region" source="region" />
        <TextField label="secretAccessKey" source="secretAccessKey" />
        <TextField label="sessionToken" source="sessionToken" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userProfile" source="userProfile" />
      </SimpleShowLayout>
    </Show>
  );
};
