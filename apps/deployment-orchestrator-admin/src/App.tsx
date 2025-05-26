import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DeploymentList } from "./deployment/DeploymentList";
import { DeploymentCreate } from "./deployment/DeploymentCreate";
import { DeploymentEdit } from "./deployment/DeploymentEdit";
import { DeploymentShow } from "./deployment/DeploymentShow";
import { PromptHandlerList } from "./promptHandler/PromptHandlerList";
import { PromptHandlerCreate } from "./promptHandler/PromptHandlerCreate";
import { PromptHandlerEdit } from "./promptHandler/PromptHandlerEdit";
import { PromptHandlerShow } from "./promptHandler/PromptHandlerShow";
import { CloudConnectionList } from "./cloudConnection/CloudConnectionList";
import { CloudConnectionCreate } from "./cloudConnection/CloudConnectionCreate";
import { CloudConnectionEdit } from "./cloudConnection/CloudConnectionEdit";
import { CloudConnectionShow } from "./cloudConnection/CloudConnectionShow";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { LlmIntegrationList } from "./llmIntegration/LlmIntegrationList";
import { LlmIntegrationCreate } from "./llmIntegration/LlmIntegrationCreate";
import { LlmIntegrationEdit } from "./llmIntegration/LlmIntegrationEdit";
import { LlmIntegrationShow } from "./llmIntegration/LlmIntegrationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Deployment Orchestrator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Deployment"
          list={DeploymentList}
          edit={DeploymentEdit}
          create={DeploymentCreate}
          show={DeploymentShow}
        />
        <Resource
          name="PromptHandler"
          list={PromptHandlerList}
          edit={PromptHandlerEdit}
          create={PromptHandlerCreate}
          show={PromptHandlerShow}
        />
        <Resource
          name="CloudConnection"
          list={CloudConnectionList}
          edit={CloudConnectionEdit}
          create={CloudConnectionCreate}
          show={CloudConnectionShow}
        />
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="LlmIntegration"
          list={LlmIntegrationList}
          edit={LlmIntegrationEdit}
          create={LlmIntegrationCreate}
          show={LlmIntegrationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
