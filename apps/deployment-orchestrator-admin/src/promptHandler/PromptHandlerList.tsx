import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPLOYMENT_TITLE_FIELD } from "../deployment/DeploymentTitle";

export const PromptHandlerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PromptHandlers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Deployment"
          source="deployment.id"
          reference="Deployment"
        >
          <TextField source={DEPLOYMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="detectedOs" source="detectedOs" />
        <TextField label="ID" source="id" />
        <TextField label="inputPrompt" source="inputPrompt" />
        <TextField label="parsedInstructions" source="parsedInstructions" />
        <TextField label="resourcesRequested" source="resourcesRequested" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
