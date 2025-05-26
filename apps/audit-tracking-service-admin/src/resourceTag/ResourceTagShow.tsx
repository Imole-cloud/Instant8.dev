import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ResourceTagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="key" source="key" />
        <TextField label="resourceId" source="resourceId" />
        <TextField label="resourceType" source="resourceType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
