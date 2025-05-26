import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InstanceTemplateTitle } from "../instanceTemplate/InstanceTemplateTitle";

export const RegionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <ReferenceArrayInput
          source="instanceTemplates"
          reference="InstanceTemplate"
        >
          <SelectArrayInput
            optionText={InstanceTemplateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="provider" source="provider" />
      </SimpleForm>
    </Create>
  );
};
