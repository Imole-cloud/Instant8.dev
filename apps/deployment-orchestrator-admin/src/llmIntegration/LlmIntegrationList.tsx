import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROMPTHANDLER_TITLE_FIELD } from "../promptHandler/PromptHandlerTitle";

export const LlmIntegrationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LLMIntegrations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="apiEndpoint" source="apiEndpoint" />
        <TextField label="apiKeyName" source="apiKeyName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="modelUsed" source="modelUsed" />
        <ReferenceField
          label="PromptHandler"
          source="prompthandler.id"
          reference="PromptHandler"
        >
          <TextField source={PROMPTHANDLER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="provider" source="provider" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
