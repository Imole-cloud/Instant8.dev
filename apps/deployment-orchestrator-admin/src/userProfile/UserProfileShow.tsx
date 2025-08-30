import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERPROFILE_TITLE_FIELD } from "./UserProfileTitle";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="role" source="role" />
        <TextField label="sshKey" source="sshKey" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CloudConnection"
          target="userProfileId"
          label="CloudConnections"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="accessKey" source="accessKey" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="provider" source="provider" />
            <TextField label="region" source="region" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="UserProfile"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Deployment"
          target="userProfileId"
          label="Deployments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="autoTerminateAt" source="autoTerminateAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="environment" source="environment" />
            <TextField label="ID" source="id" />
            <TextField label="region" source="region" />
            <TextField label="requestPrompt" source="requestPrompt" />
            <TextField label="resolvedConfig" source="resolvedConfig" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="UserProfile"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
