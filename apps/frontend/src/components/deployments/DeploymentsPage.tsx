import React from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  Button,
  Divider,
  CircularProgress,
  Alert,
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
} from '@mui/icons-material';
import { Grid as MuiGrid } from '@mui/material';
import DeploymentCard from './DeploymentCard';
import apiService from '../../services/apiService';

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

// Define a type for deployment data
interface DeploymentData {
  name: string;
  provider: string;
  region: string;
  resources: any[];
  configuration?: Record<string, any>;
}

const DeploymentsPage: React.FC = () => {
  const [deployments, setDeployments] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [openNewDialog, setOpenNewDialog] = React.useState(false);
  
  // New deployment form state
  const [newDeployment, setNewDeployment] = React.useState<DeploymentData>({
    name: '',
    provider: '',
    region: '',
    resources: []
  });

  const fetchDeployments = async () => {
    try {
      setRefreshing(true);
      const response = await apiService.deployments.getAll({});
      
      // Transform API response
      const transformedDeployments = response.data.map((deployment: any) => ({
        id: deployment.id,
        name: deployment.name,
        status: deployment.status.toLowerCase(),
        provider: deployment.provider,
        region: deployment.region,
        createdAt: deployment.createdAt,
        url: deployment.url,
      }));
      
      setDeployments(transformedDeployments);
      setError(null);
    } catch (err: any) {
      console.error('Failed to fetch deployments:', err);
      setError(err.message || 'Failed to load deployments. Please try again.');
      
      // Fallback to mock data if API fails
      setDeployments(useMockData());
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  React.useEffect(() => {
    fetchDeployments();
  }, []);

  const handleRefresh = () => {
    fetchDeployments();
  };
  
  const handleOpenNewDialog = () => {
    setOpenNewDialog(true);
  };
  
  const handleCloseNewDialog = () => {
    setOpenNewDialog(false);
    // Reset form
    setNewDeployment({
      name: '',
      provider: '',
      region: '',
      resources: []
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewDeployment(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCreateDeployment = async () => {
    try {
      setLoading(true);
      await apiService.deployments.create(newDeployment);
      handleCloseNewDialog();
      fetchDeployments();
    } catch (err: any) {
      console.error('Failed to create deployment:', err);
      setError(err.message || 'Failed to create deployment. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleViewDeployment = (id: string) => {
    // Navigate to deployment details
    console.log('View deployment:', id);
  };
  
  const handleStartDeployment = async (id: string) => {
    try {
      setLoading(true);
      // Create a deployment update object that matches DeploymentData
      const updateData: Partial<DeploymentData> = {
        // Include any required fields for the update
        configuration: { status: 'RUNNING' }
      };
      await apiService.deployments.update(id, updateData as DeploymentData);
      fetchDeployments();
    } catch (err: any) {
      console.error('Failed to start deployment:', err);
      setError(err.message || 'Failed to start deployment. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleStopDeployment = async (id: string) => {
    try {
      setLoading(true);
      // Create a deployment update object that matches DeploymentData
      const updateData: Partial<DeploymentData> = {
        // Include any required fields for the update
        configuration: { status: 'STOPPED' }
      };
      await apiService.deployments.update(id, updateData as DeploymentData);
      fetchDeployments();
    } catch (err: any) {
      console.error('Failed to stop deployment:', err);
      setError(err.message || 'Failed to stop deployment. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleDeleteDeployment = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this deployment?')) {
      return;
    }
    
    try {
      setLoading(true);
      await apiService.deployments.delete(id);
      fetchDeployments();
    } catch (err: any) {
      console.error('Failed to delete deployment:', err);
      setError(err.message || 'Failed to delete deployment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fallback to mock data if API fails or for development
  const useMockData = () => {
    return [
      {
        id: 'dep-1',
        name: 'Production API',
        status: 'running',
        provider: 'AWS',
        region: 'us-east-1',
        createdAt: '2025-05-15T10:30:00Z',
        url: 'https://api.example.com',
      },
      {
        id: 'dep-2',
        name: 'Staging Environment',
        status: 'running',
        provider: 'Azure',
        region: 'eastus',
        createdAt: '2025-05-10T14:20:00Z',
        url: 'https://staging.example.com',
      },
      {
        id: 'dep-3',
        name: 'Development Server',
        status: 'stopped',
        provider: 'GCP',
        region: 'us-central1',
        createdAt: '2025-05-05T09:15:00Z',
        url: 'https://dev.example.com',
      },
      {
        id: 'dep-4',
        name: 'Database Cluster',
        status: 'deploying',
        provider: 'AWS',
        region: 'eu-west-1',
        createdAt: '2025-05-20T16:45:00Z',
      },
    ];
  };

  // Use mock data if no deployments from API
  const displayDeployments = deployments.length > 0 ? deployments : useMockData();

  return (
    <>
      <PageHeader>
        <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
          Deployments
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your application deployments across cloud providers.
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
          Active Deployments
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
              New Deployment
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
            {displayDeployments.map((deployment) => (
              <Grid xs={12} sm={6} md={4} key={deployment.id}>
                <DeploymentCard
                  deployment={deployment}
                  onView={handleViewDeployment}
                  onStart={handleStartDeployment}
                  onStop={handleStopDeployment}
                  onDelete={handleDeleteDeployment}
                />
              </Grid>
            ))}
          </MuiGrid>
        )}
      </Paper>
      
      {/* New Deployment Dialog */}
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
        <DialogTitle>Create New Deployment</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              margin="normal"
              label="Deployment Name"
              name="name"
              value={newDeployment.name}
              onChange={handleInputChange}
            />
            
            <FormControl fullWidth margin="normal">
              <InputLabel>Cloud Provider</InputLabel>
              <Select
                name="provider"
                value={newDeployment.provider}
                label="Cloud Provider"
                onChange={(e) => {
                  setNewDeployment(prev => ({
                    ...prev,
                    provider: e.target.value as string
                  }));
                }}
              >
                <MenuItem value="AWS">Amazon Web Services (AWS)</MenuItem>
                <MenuItem value="Azure">Microsoft Azure</MenuItem>
                <MenuItem value="GCP">Google Cloud Platform (GCP)</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl fullWidth margin="normal">
              <InputLabel>Region</InputLabel>
              <Select
                name="region"
                value={newDeployment.region}
                label="Region"
                onChange={(e) => {
                  setNewDeployment(prev => ({
                    ...prev,
                    region: e.target.value as string
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
            onClick={handleCreateDeployment} 
            variant="contained" 
            color="primary"
          >
            Create Deployment
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeploymentsPage;
