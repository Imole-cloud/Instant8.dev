import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AzureConnectionList } from "./azureConnection/AzureConnectionList";
import { AzureConnectionCreate } from "./azureConnection/AzureConnectionCreate";
import { AzureConnectionEdit } from "./azureConnection/AzureConnectionEdit";
import { AzureConnectionShow } from "./azureConnection/AzureConnectionShow";
import { AwsConnectionList } from "./awsConnection/AwsConnectionList";
import { AwsConnectionCreate } from "./awsConnection/AwsConnectionCreate";
import { AwsConnectionEdit } from "./awsConnection/AwsConnectionEdit";
import { AwsConnectionShow } from "./awsConnection/AwsConnectionShow";
import { GcpConnectionList } from "./gcpConnection/GcpConnectionList";
import { GcpConnectionCreate } from "./gcpConnection/GcpConnectionCreate";
import { GcpConnectionEdit } from "./gcpConnection/GcpConnectionEdit";
import { GcpConnectionShow } from "./gcpConnection/GcpConnectionShow";
import { InstanceTemplateList } from "./instanceTemplate/InstanceTemplateList";
import { InstanceTemplateCreate } from "./instanceTemplate/InstanceTemplateCreate";
import { InstanceTemplateEdit } from "./instanceTemplate/InstanceTemplateEdit";
import { InstanceTemplateShow } from "./instanceTemplate/InstanceTemplateShow";
import { ProviderLogList } from "./providerLog/ProviderLogList";
import { ProviderLogCreate } from "./providerLog/ProviderLogCreate";
import { ProviderLogEdit } from "./providerLog/ProviderLogEdit";
import { ProviderLogShow } from "./providerLog/ProviderLogShow";
import { RegionList } from "./region/RegionList";
import { RegionCreate } from "./region/RegionCreate";
import { RegionEdit } from "./region/RegionEdit";
import { RegionShow } from "./region/RegionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Cloud Provider Connector"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AzureConnection"
          list={AzureConnectionList}
          edit={AzureConnectionEdit}
          create={AzureConnectionCreate}
          show={AzureConnectionShow}
        />
        <Resource
          name="AwsConnection"
          list={AwsConnectionList}
          edit={AwsConnectionEdit}
          create={AwsConnectionCreate}
          show={AwsConnectionShow}
        />
        <Resource
          name="GcpConnection"
          list={GcpConnectionList}
          edit={GcpConnectionEdit}
          create={GcpConnectionCreate}
          show={GcpConnectionShow}
        />
        <Resource
          name="InstanceTemplate"
          list={InstanceTemplateList}
          edit={InstanceTemplateEdit}
          create={InstanceTemplateCreate}
          show={InstanceTemplateShow}
        />
        <Resource
          name="ProviderLog"
          list={ProviderLogList}
          edit={ProviderLogEdit}
          create={ProviderLogCreate}
          show={ProviderLogShow}
        />
        <Resource
          name="Region"
          list={RegionList}
          edit={RegionEdit}
          create={RegionCreate}
          show={RegionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
