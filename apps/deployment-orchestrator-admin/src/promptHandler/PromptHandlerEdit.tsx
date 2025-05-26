import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DeploymentTitle } from "../deployment/DeploymentTitle";
import { LlmIntegrationTitle } from "../llmIntegration/LlmIntegrationTitle";

export const PromptHandlerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="deployment.id"
          reference="Deployment"
          label="Deployment"
        >
          <SelectInput optionText={DeploymentTitle} />
        </ReferenceInput>
        <TextInput label="detectedOs" source="detectedOs" />
        <TextInput label="inputPrompt" multiline source="inputPrompt" />
        <ReferenceArrayInput
          source="llmIntegrations"
          reference="LlmIntegration"
        >
          <SelectArrayInput
            optionText={LlmIntegrationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};
