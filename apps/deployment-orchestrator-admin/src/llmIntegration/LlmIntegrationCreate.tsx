import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PromptHandlerTitle } from "../promptHandler/PromptHandlerTitle";

export const LlmIntegrationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiEndpoint" source="apiEndpoint" />
        <TextInput label="apiKeyName" source="apiKeyName" />
        <TextInput label="modelUsed" source="modelUsed" />
        <ReferenceInput
          source="promptHandler.id"
          reference="PromptHandler"
          label="PromptHandler"
        >
          <SelectInput optionText={PromptHandlerTitle} />
        </ReferenceInput>
        <TextInput label="provider" source="provider" />
      </SimpleForm>
    </Create>
  );
};
