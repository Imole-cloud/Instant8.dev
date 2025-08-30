import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { REGION_TITLE_FIELD } from "../region/RegionTitle";

export const InstanceTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cpu" source="cpu" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="hasGpu" source="hasGpu" />
        <TextField label="ID" source="id" />
        <TextField label="memoryGB" source="memoryGb" />
        <TextField label="name" source="name" />
        <TextField label="provider" source="provider" />
        <ReferenceField label="region" source="region.id" reference="Region">
          <TextField source={REGION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="storageGB" source="storageGb" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
