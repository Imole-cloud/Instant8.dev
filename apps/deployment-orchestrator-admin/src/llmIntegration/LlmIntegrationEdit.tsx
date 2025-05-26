import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PromptHandlerTitle } from "../promptHandler/PromptHandlerTitle";

export const LlmIntegrationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
