import React from 'react';
import { 
  Box, 
  Typography, 
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  Paper,
  Alert,
  Tabs,
  Tab
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Grid as MuiGrid } from '@mui/material';

// Create a Grid component that works with MUI v7
const Grid = (props: any) => {
  const { item, xs, sm, md, children, ...other } = props;
  return (
    <MuiGrid {...other} sx={{ 
      gridColumn: {
        xs: item && xs ? `span ${xs}` : undefined,
        sm: item && sm ? `span ${sm}` : undefined,
        md: item && md ? `span ${md}` : undefined,
      },
      display: 'flex',
      flexDirection: 'column'
    }}>
      {children}
    </MuiGrid>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const StyledCard = styled(Card)(() => ({
  background: 'rgba(42, 42, 42, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  marginBottom: 24,
}));

const SettingsPage: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [saved, setSaved] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  
  // Form states
  const [generalSettings, setGeneralSettings] = React.useState({
    projectName: 'Instant8.dev',
    defaultRegion: 'us-east-1',
    defaultProvider: 'AWS',
    enableNotifications: true,
    enableAnalytics: true,
  });
  
  const [apiSettings, setApiSettings] = React.useState({
    apiKey: 'sk-••••••••••••••••••••••••••••••',
    endpoint: 'https://api.instant8.dev',
    timeout: '30',
    maxRetries: '3',
  });
  
  const [securitySettings, setSecuritySettings] = React.useState({
    twoFactorAuth: false,
    sessionTimeout: '60',
    ipRestriction: '',
    auditLogging: true,
  });
  
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // Reset saved state when changing tabs
    setSaved(false);
    setError(null);
  };
  
  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setGeneralSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setSaved(false);
  };
  
  const handleApiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApiSettings(prev => ({
      ...prev,
      [name]: value
    }));
    setSaved(false);
  };
  
  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setSecuritySettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setSaved(false);
  };
  
  const handleSaveSettings = () => {
    try {
      // Simulate API call to save settings
      setTimeout(() => {
        setSaved(true);
        // Reset saved state after 3 seconds
        setTimeout(() => setSaved(false), 3000);
      }, 500);
    } catch (err) {
      setError('Failed to save settings. Please try again.');
    }
  };
  
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
          Settings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Configure your Instant8.dev environment and preferences.
        </Typography>
      </Box>
      
      <Paper 
        sx={{ 
          p: 3, 
          mb: 4, 
          background: 'rgba(42, 42, 42, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Tabs 
          value={value} 
          onChange={handleTabChange}
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main',
            }
          }}
        >
          <Tab label="General" />
          <Tab label="API" />
          <Tab label="Security" />
        </Tabs>
        
        {saved && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Settings saved successfully!
          </Alert>
        )}
        
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        
        <TabPanel value={value} index={0}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Project Settings
              </Typography>
              <Divider sx={{ mb: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              
              <MuiGrid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    name="projectName"
                    value={generalSettings.projectName}
                    onChange={handleGeneralChange}
                    margin="normal"
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Default Region</InputLabel>
                    <Select
                      name="defaultRegion"
                      value={generalSettings.defaultRegion}
                      label="Default Region"
                      onChange={(e) => {
                        setGeneralSettings(prev => ({
                          ...prev,
                          defaultRegion: e.target.value as string
                        }));
                        setSaved(false);
                      }}
                    >
                      <MenuItem value="us-east-1">US East (N. Virginia)</MenuItem>
                      <MenuItem value="us-west-2">US West (Oregon)</MenuItem>
                      <MenuItem value="eu-west-1">EU West (Ireland)</MenuItem>
                      <MenuItem value="ap-southeast-1">Asia Pacific (Singapore)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Default Provider</InputLabel>
                    <Select
                      name="defaultProvider"
                      value={generalSettings.defaultProvider}
                      label="Default Provider"
                      onChange={(e) => {
                        setGeneralSettings(prev => ({
                          ...prev,
                          defaultProvider: e.target.value as string
                        }));
                        setSaved(false);
                      }}
                    >
                      <MenuItem value="AWS">Amazon Web Services (AWS)</MenuItem>
                      <MenuItem value="Azure">Microsoft Azure</MenuItem>
                      <MenuItem value="GCP">Google Cloud Platform (GCP)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </MuiGrid>
            </CardContent>
          </StyledCard>
          
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Notifications & Analytics
              </Typography>
              <Divider sx={{ mb: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              
              <FormControlLabel
                control={
                  <Switch 
                    checked={generalSettings.enableNotifications}
                    onChange={handleGeneralChange}
                    name="enableNotifications"
                    color="primary"
                  />
                }
                label="Enable Email Notifications"
                sx={{ mb: 2, display: 'block' }}
              />
              
              <FormControlLabel
                control={
                  <Switch 
                    checked={generalSettings.enableAnalytics}
                    onChange={handleGeneralChange}
                    name="enableAnalytics"
                    color="primary"
                  />
                }
                label="Enable Usage Analytics"
                sx={{ display: 'block' }}
              />
            </CardContent>
          </StyledCard>
        </TabPanel>
        
        <TabPanel value={value} index={1}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                API Configuration
              </Typography>
              <Divider sx={{ mb: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              
              <MuiGrid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="API Key"
                    name="apiKey"
                    value={apiSettings.apiKey}
                    onChange={handleApiChange}
                    margin="normal"
                    type="password"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="API Endpoint"
                    name="endpoint"
                    value={apiSettings.endpoint}
                    onChange={handleApiChange}
                    margin="normal"
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Request Timeout (seconds)"
                    name="timeout"
                    value={apiSettings.timeout}
                    onChange={handleApiChange}
                    margin="normal"
                    type="number"
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Max Retries"
                    name="maxRetries"
                    value={apiSettings.maxRetries}
                    onChange={handleApiChange}
                    margin="normal"
                    type="number"
                  />
                </Grid>
              </MuiGrid>
            </CardContent>
          </StyledCard>
        </TabPanel>
        
        <TabPanel value={value} index={2}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Security Settings
              </Typography>
              <Divider sx={{ mb: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              
              <FormControlLabel
                control={
                  <Switch 
                    checked={securitySettings.twoFactorAuth}
                    onChange={handleSecurityChange}
                    name="twoFactorAuth"
                    color="primary"
                  />
                }
                label="Enable Two-Factor Authentication"
                sx={{ mb: 2, display: 'block' }}
              />
              
              <MuiGrid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Session Timeout (minutes)"
                    name="sessionTimeout"
                    value={securitySettings.sessionTimeout}
                    onChange={handleSecurityChange}
                    margin="normal"
                    type="number"
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="IP Restriction (comma separated)"
                    name="ipRestriction"
                    value={securitySettings.ipRestriction}
                    onChange={handleSecurityChange}
                    margin="normal"
                    placeholder="e.g. 192.168.1.1, 10.0.0.1"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch 
                        checked={securitySettings.auditLogging}
                        onChange={handleSecurityChange}
                        name="auditLogging"
                        color="primary"
                      />
                    }
                    label="Enable Audit Logging"
                    sx={{ display: 'block' }}
                  />
                </Grid>
              </MuiGrid>
            </CardContent>
          </StyledCard>
        </TabPanel>
        
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleSaveSettings}
          >
            Save Settings
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default SettingsPage;
