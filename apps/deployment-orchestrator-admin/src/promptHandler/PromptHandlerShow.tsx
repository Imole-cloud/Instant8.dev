import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PROMPTHANDLER_TITLE_FIELD } from "./PromptHandlerTitle";
import { DEPLOYMENT_TITLE_FIELD } from "../deployment/DeploymentTitle";

export const PromptHandlerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="LlmIntegration"
          target="promptHandlerId"
          label="LLMIntegrations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="apiEndpoint" source="apiEndpoint" />
            <TextField label="apiKeyName" source="apiKeyName" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="modelUsed" source="modelUsed" />
            <ReferenceField
              label="PromptHandler"
              source="prompthandler.id"
              reference="PromptHandler"
            >
              <TextField source={PROMPTHANDLER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="provider" source="provider" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
