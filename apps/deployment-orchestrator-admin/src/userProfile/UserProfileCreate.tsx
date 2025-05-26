import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CloudConnectionTitle } from "../cloudConnection/CloudConnectionTitle";
import { DeploymentTitle } from "../deployment/DeploymentTitle";

export const UserProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cloudConnections"
          reference="CloudConnection"
        >
          <SelectArrayInput
            optionText={CloudConnectionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="deployments" reference="Deployment">
          <SelectArrayInput
            optionText={DeploymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
        <TextInput label="sshKey" multiline source="sshKey" />
      </SimpleForm>
    </Create>
  );
};
