import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { REGION_TITLE_FIELD } from "./RegionTitle";

export const RegionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="provider" source="provider" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InstanceTemplate"
          target="regionId"
          label="InstanceTemplates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="cpu" source="cpu" />
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="hasGpu" source="hasGpu" />
            <TextField label="ID" source="id" />
            <TextField label="memoryGB" source="memoryGb" />
            <TextField label="name" source="name" />
            <TextField label="provider" source="provider" />
            <ReferenceField
              label="region"
              source="region.id"
              reference="Region"
            >
              <TextField source={REGION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="storageGB" source="storageGb" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
