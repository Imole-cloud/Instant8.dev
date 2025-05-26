import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RegionTitle } from "../region/RegionTitle";

export const InstanceTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="cpu" source="cpu" />
        <BooleanInput label="hasGpu" source="hasGpu" />
        <NumberInput step={1} label="memoryGB" source="memoryGb" />
        <TextInput label="name" source="name" />
        <TextInput label="provider" source="provider" />
        <ReferenceInput source="region.id" reference="Region" label="region">
          <SelectInput optionText={RegionTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="storageGB" source="storageGb" />
      </SimpleForm>
    </Edit>
  );
};
