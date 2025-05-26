import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DEPLOYMENT_TITLE_FIELD } from "./DeploymentTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const DeploymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="PromptHandler"
          target="deploymentId"
          label="PromptHandlers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Deployment"
              source="deployment.id"
              reference="Deployment"
            >
              <TextField source={DEPLOYMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="detectedOs" source="detectedOs" />
            <TextField label="ID" source="id" />
            <TextField label="inputPrompt" source="inputPrompt" />
            <TextField label="parsedInstructions" source="parsedInstructions" />
            <TextField label="resourcesRequested" source="resourcesRequested" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
