import React from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  Button,
  Divider,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Add as AddIcon,
  Refresh as RefreshIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Check as CheckIcon,
  CloudDone as CloudDoneIcon,
  CloudOff as CloudOffIcon
} from '@mui/icons-material';
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

const PageHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const ActionBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  width: '100%',
}));

const ProviderCard = styled(Card)(() => ({
  height: '100%',
  position: 'relative',
  overflow: 'visible',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  background: 'rgba(42, 42, 42, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
}));

interface StatusIndicatorProps {
  connected: boolean;
}

const StatusIndicator = styled('div')<StatusIndicatorProps>(
  ({ theme, connected }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: connected ? theme.palette.success.main : theme.palette.error.main,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
  }),
);

const ProviderIcon = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
}));

const ProvidersPage: React.FC = () => {
  const [providers, setProviders] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [openNewDialog, setOpenNewDialog] = React.useState(false);
  const [openTestDialog, setOpenTestDialog] = React.useState(false);
  const [testingProvider, setTestingProvider] = React.useState<string | null>(null);
  const [testResult, setTestResult] = React.useState<{success: boolean, message: string} | null>(null);
  
  // New provider form state
  const [newProvider, setNewProvider] = React.useState({
    name: '',
    type: '',
    credentials: {
      accessKey: '',
      secretKey: '',
      region: ''
    }
  });

  const fetchProviders = async () => {
    try {
      setRefreshing(true);
      const response = await apiService.providers.getAll();
      
      // Transform API response
      const transformedProviders = response.data.map((provider: any) => ({
        id: provider.id,
        name: provider.name,
        type: provider.type,
        connected: provider.status === 'CONNECTED',
        lastChecked: new Date(provider.lastChecked || Date.now()).toLocaleString(),
        region: provider.region || 'N/A',
      }));
      
      setProviders(transformedProviders);
      setError(null);
    } catch (err: any) {
      console.error('Failed to fetch providers:', err);
      setError(err.message || 'Failed to load cloud providers. Please try again.');
      
      // Fallback to mock data if API fails
      setProviders(useMockData());
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  React.useEffect(() => {
    fetchProviders();
  }, []);

  const handleRefresh = () => {
    fetchProviders();
  };
  
  const handleOpenNewDialog = () => {
    setOpenNewDialog(true);
  };
  
  const handleCloseNewDialog = () => {
    setOpenNewDialog(false);
    // Reset form
    setNewProvider({
      name: '',
      type: '',
      credentials: {
        accessKey: '',
        secretKey: '',
        region: ''
      }
    });
  };
  
  // Updated to handle both HTMLInputElement and Select changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name?.includes('.')) {
      const [parent, child] = name.split('.');
      setNewProvider(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev] as Record<string, unknown>,
          [child]: value
        }
      }));
    } else if (name) {
      setNewProvider(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleCreateProvider = async () => {
    try {
      setLoading(true);
      await apiService.providers.create(newProvider);
      handleCloseNewDialog();
      fetchProviders();
    } catch (err: any) {
      console.error('Failed to create provider:', err);
      setError(err.message || 'Failed to create cloud provider. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleTestProvider = async (id: string) => {
    setTestingProvider(id);
    setOpenTestDialog(true);
    setTestResult(null);
    
    try {
      const response = await apiService.providers.test(id);
      setTestResult({
        success: response.data.success,
        message: response.data.message || 'Connection test successful!'
      });
    } catch (err: any) {
      setTestResult({
        success: false,
        message: err.message || 'Connection test failed. Please check your credentials.'
      });
    } finally {
      setTestingProvider(null);
    }
  };
  
  const handleCloseTestDialog = () => {
    setOpenTestDialog(false);
    setTestResult(null);
  };
  
  const handleDeleteProvider = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this cloud provider?')) {
      return;
    }
    
    try {
      setLoading(true);
      await apiService.providers.delete(id);
      fetchProviders();
    } catch (err: any) {
      console.error('Failed to delete provider:', err);
      setError(err.message || 'Failed to delete cloud provider. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fallback to mock data if API fails or for development
  const useMockData = () => {
    return [
      {
        id: 'prov-1',
        name: 'AWS Production',
        type: 'AWS',
        connected: true,
        lastChecked: '1 hour ago',
        region: 'us-east-1',
      },
      {
        id: 'prov-2',
        name: 'Azure Development',
        type: 'Azure',
        connected: true,
        lastChecked: '3 hours ago',
        region: 'eastus',
      },
      {
        id: 'prov-3',
        name: 'GCP Staging',
        type: 'GCP',
        connected: false,
        lastChecked: '1 day ago',
        region: 'us-central1',
      },
    ];
  };

  // Use mock data if no providers from API
  const displayProviders = providers.length > 0 ? providers : useMockData();

  const getProviderIconStyle = (type: string) => {
    switch (type.toUpperCase()) {
      case 'AWS':
        return { background: 'linear-gradient(135deg, #FF9900, #FFC300)' };
      case 'AZURE':
        return { background: 'linear-gradient(135deg, #0078D4, #00BCF2)' };
      case 'GCP':
        return { background: 'linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)' };
      default:
        return { background: 'linear-gradient(135deg, #6B46C1, #9F7AEA)' };
    }
  };

  return (
    <>
      <PageHeader>
        <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
          Cloud Providers
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your cloud provider connections and credentials.
        </Typography>
      </PageHeader>

      <Paper 
        sx={{ 
          p: 3, 
          mb: 4, 
          background: 'rgba(42, 42, 42, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Connected Providers
        </Typography>
        <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <ActionBar>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<AddIcon />}
              onClick={handleOpenNewDialog}
            >
              Add Provider
            </Button>
            <Button 
              variant="outlined" 
              startIcon={<RefreshIcon />}
              sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
              onClick={handleRefresh}
              disabled={refreshing}
            >
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
          </Box>
        </ActionBar>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {loading ? (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        ) : (
          <MuiGrid container spacing={3}>
            {displayProviders.map((provider) => (
              <Grid xs={12} sm={6} md={4} key={provider.id}>
                <ProviderCard>
                  <StatusIndicator connected={provider.connected} />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <ProviderIcon sx={getProviderIconStyle(provider.type)}>
                        {provider.type.substring(0, 1)}
                      </ProviderIcon>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div">
                          {provider.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {provider.type} • {provider.region}
                        </Typography>
                      </Box>
                      {provider.connected ? (
                        <CloudDoneIcon color="success" />
                      ) : (
                        <CloudOffIcon color="error" />
                      )}
                    </Box>
                    
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                      Last checked: {provider.lastChecked}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                      <Button 
                        size="small" 
                        variant="outlined"
                        onClick={() => handleTestProvider(provider.id)}
                        startIcon={<CheckIcon />}
                        sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                      >
                        Test
                      </Button>
                      <IconButton size="small" color="primary">
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton 
                        size="small" 
                        color="error"
                        onClick={() => handleDeleteProvider(provider.id)}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </ProviderCard>
              </Grid>
            ))}
          </MuiGrid>
        )}
      </Paper>
      
      {/* New Provider Dialog */}
      <Dialog 
        open={openNewDialog} 
        onClose={handleCloseNewDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            backgroundImage: 'none',
          }
        }}
      >
        <DialogTitle>Add Cloud Provider</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              margin="normal"
              label="Provider Name"
              name="name"
              value={newProvider.name}
              onChange={handleInputChange}
            />
            
            <FormControl fullWidth margin="normal">
              <InputLabel>Provider Type</InputLabel>
              <Select
                name="type"
                value={newProvider.type}
                label="Provider Type"
                onChange={(e) => {
                  setNewProvider(prev => ({
                    ...prev,
                    type: e.target.value as string
                  }));
                }}
              >
                <MenuItem value="AWS">Amazon Web Services (AWS)</MenuItem>
                <MenuItem value="Azure">Microsoft Azure</MenuItem>
                <MenuItem value="GCP">Google Cloud Platform (GCP)</MenuItem>
              </Select>
            </FormControl>
            
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
              Credentials
            </Typography>
            
            <TextField
              fullWidth
              margin="normal"
              label="Access Key / Client ID"
              name="credentials.accessKey"
              value={newProvider.credentials.accessKey}
              onChange={handleInputChange}
            />
            
            <TextField
              fullWidth
              margin="normal"
              label="Secret Key / Client Secret"
              name="credentials.secretKey"
              type="password"
              value={newProvider.credentials.secretKey}
              onChange={handleInputChange}
            />
            
            <FormControl fullWidth margin="normal">
              <InputLabel>Region</InputLabel>
              <Select
                name="credentials.region"
                value={newProvider.credentials.region}
                label="Region"
                onChange={(e) => {
                  setNewProvider(prev => ({
                    ...prev,
                    credentials: {
                      ...prev.credentials,
                      region: e.target.value as string
                    }
                  }));
                }}
              >
                <MenuItem value="us-east-1">US East (N. Virginia)</MenuItem>
                <MenuItem value="us-west-2">US West (Oregon)</MenuItem>
                <MenuItem value="eu-west-1">EU West (Ireland)</MenuItem>
                <MenuItem value="ap-southeast-1">Asia Pacific (Singapore)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewDialog}>Cancel</Button>
          <Button 
            onClick={handleCreateProvider} 
            variant="contained" 
            color="primary"
          >
            Add Provider
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Test Connection Dialog */}
      <Dialog 
        open={openTestDialog} 
        onClose={handleCloseTestDialog}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            backgroundImage: 'none',
          }
        }}
      >
        <DialogTitle>Connection Test</DialogTitle>
        <DialogContent>
          {testingProvider && !testResult ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
              <CircularProgress />
            </Box>
          ) : testResult ? (
            <Alert 
              severity={testResult.success ? "success" : "error"}
              sx={{ mt: 2 }}
            >
              {testResult.message}
            </Alert>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTestDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

import apiService from '../../services/apiService';
export default ProvidersPage;
