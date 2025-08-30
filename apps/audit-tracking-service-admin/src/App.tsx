import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DeploymentStatusHistoryList } from "./deploymentStatusHistory/DeploymentStatusHistoryList";
import { DeploymentStatusHistoryCreate } from "./deploymentStatusHistory/DeploymentStatusHistoryCreate";
import { DeploymentStatusHistoryEdit } from "./deploymentStatusHistory/DeploymentStatusHistoryEdit";
import { DeploymentStatusHistoryShow } from "./deploymentStatusHistory/DeploymentStatusHistoryShow";
import { ResourceTagList } from "./resourceTag/ResourceTagList";
import { ResourceTagCreate } from "./resourceTag/ResourceTagCreate";
import { ResourceTagEdit } from "./resourceTag/ResourceTagEdit";
import { ResourceTagShow } from "./resourceTag/ResourceTagShow";
import { AuditLogList } from "./auditLog/AuditLogList";
import { AuditLogCreate } from "./auditLog/AuditLogCreate";
import { AuditLogEdit } from "./auditLog/AuditLogEdit";
import { AuditLogShow } from "./auditLog/AuditLogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Audit & Tracking Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DeploymentStatusHistory"
          list={DeploymentStatusHistoryList}
          edit={DeploymentStatusHistoryEdit}
          create={DeploymentStatusHistoryCreate}
          show={DeploymentStatusHistoryShow}
        />
        <Resource
          name="ResourceTag"
          list={ResourceTagList}
          edit={ResourceTagEdit}
          create={ResourceTagCreate}
          show={ResourceTagShow}
        />
        <Resource
          name="AuditLog"
          list={AuditLogList}
          edit={AuditLogEdit}
          create={AuditLogCreate}
          show={AuditLogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
