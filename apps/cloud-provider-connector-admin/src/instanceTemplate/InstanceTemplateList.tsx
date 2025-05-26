import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { REGION_TITLE_FIELD } from "../region/RegionTitle";

export const InstanceTemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"InstanceTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
