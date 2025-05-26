import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { PromptHandlerTitle } from "../promptHandler/PromptHandlerTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const DeploymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="autoTerminateAt" source="autoTerminateAt" />
        <TextInput label="environment" source="environment" />
        <ReferenceArrayInput source="promptHandlers" reference="PromptHandler">
          <SelectArrayInput
            optionText={PromptHandlerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="region" source="region" />
        <TextInput label="requestPrompt" multiline source="requestPrompt" />
        <div />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="userProfile.id"
          reference="UserProfile"
          label="UserProfile"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
