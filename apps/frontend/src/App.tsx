import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import DeploymentsPage from './components/deployments/DeploymentsPage';
import ProvidersPage from './components/providers/ProvidersPage';
import ActivityPage from './components/activity/ActivityPage';
import SettingsPage from './components/settings/SettingsPage';
import LoginPage from './components/auth/LoginPage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [isAuthenticated] = useState(true);

  return (
    <AuthProvider>
      <Router>
        {isAuthenticated ? (
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/deployments" element={<DeploymentsPage />} />
              <Route path="/providers" element={<ProvidersPage />} />
              <Route path="/activity" element={<ActivityPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Layout>
        ) : (
          <Routes>
            <Route path="*" element={<LoginPage />} />
          </Routes>
        )}
      </Router>
    </AuthProvider>
  );
}

export default App;
