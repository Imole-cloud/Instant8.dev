import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PROMPTHANDLER_TITLE_FIELD } from "../promptHandler/PromptHandlerTitle";

export const LlmIntegrationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
