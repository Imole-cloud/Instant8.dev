import React, { useState, useEffect } from 'react';
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
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Add as AddIcon,
  Refresh as RefreshIcon,
  Storage as StorageIcon,
  Speed as SpeedIcon,
  Memory as MemoryIcon,
  CloudQueue as CloudQueueIcon
} from '@mui/icons-material';
import { Grid as MuiGrid } from '@mui/material';

const StatsCard = styled(Card)(() => ({
  height: '100%',
  background: 'rgba(42, 42, 42, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
}));

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats] = useState({
    activeDeployments: 12,
    totalResources: 48,
    cpuUsage: 62,
    memoryUsage: 45,
  });
  const [recentDeployments, setRecentDeployments] = useState<any[]>([]);
  
  useEffect(() => {
    // Fetch dashboard data
    fetchDashboardData();
  }, []);
  
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      setRecentDeployments([
        {
          id: 'dep-1',
          name: 'Production API',
          status: 'running',
          provider: 'AWS',
          region: 'us-east-1',
          createdAt: '2025-05-15T10:30:00Z',
        },
        {
          id: 'dep-2',
          name: 'Staging Environment',
          status: 'running',
          provider: 'Azure',
          region: 'eastus',
          createdAt: '2025-05-10T14:20:00Z',
        },
        {
          id: 'dep-3',
          name: 'Development Server',
          status: 'stopped',
          provider: 'GCP',
          region: 'us-central1',
          createdAt: '2025-05-05T09:15:00Z',
        },
      ]);
      
      setError(null);
    } catch (err: any) {
      console.error('Failed to fetch dashboard data:', err);
      setError(err.message || 'Failed to load dashboard data. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleRefresh = () => {
    fetchDashboardData();
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'running': return 'success.main';
      case 'stopped': return 'error.main';
      case 'deploying': return 'warning.main';
      default: return 'text.secondary';
    }
  };
  
  const getStatusText = (status: string) => {
    switch(status) {
      case 'running': return 'Running';
      case 'stopped': return 'Stopped';
      case 'deploying': return 'Deploying';
      default: return 'Unknown';
    }
  };
  
  const getProviderIcon = (provider: string) => {
    switch(provider.toUpperCase()) {
      case 'AWS': return { icon: <CloudQueueIcon />, color: '#FF9900' };
      case 'AZURE': return { icon: <CloudQueueIcon />, color: '#0078D4' };
      case 'GCP': return { icon: <CloudQueueIcon />, color: '#4285F4' };
      default: return { icon: <CloudQueueIcon />, color: '#6B46C1' };
    }
  };
  
  return (
    <>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
            Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Overview of your Instant8.dev environment.
          </Typography>
        </Box>
        
        <Button 
          variant="outlined" 
          startIcon={<RefreshIcon />}
          onClick={handleRefresh}
          disabled={loading}
          sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
        >
          {loading ? 'Refreshing...' : 'Refresh'}
        </Button>
      </Box>
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      {/* Stats Cards */}
      <MuiGrid container spacing={3} sx={{ mb: 4 }}>
        <Box sx={{ gridColumn: 'span 3' }}>
          <StatsCard>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <IconContainer sx={{ background: 'rgba(63, 81, 181, 0.2)' }}>
                <StorageIcon sx={{ color: 'primary.main' }} />
              </IconContainer>
              <Box>
                <Typography variant="h4" fontWeight={600}>
                  {stats.activeDeployments}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Deployments
                </Typography>
              </Box>
            </CardContent>
          </StatsCard>
        </Box>
        
        <Box sx={{ gridColumn: 'span 3' }}>
          <StatsCard>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <IconContainer sx={{ background: 'rgba(245, 0, 87, 0.2)' }}>
                <CloudQueueIcon sx={{ color: 'secondary.main' }} />
              </IconContainer>
              <Box>
                <Typography variant="h4" fontWeight={600}>
                  {stats.totalResources}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Resources
                </Typography>
              </Box>
            </CardContent>
          </StatsCard>
        </Box>
        
        <Box sx={{ gridColumn: 'span 3' }}>
          <StatsCard>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <IconContainer sx={{ background: 'rgba(76, 175, 80, 0.2)' }}>
                <SpeedIcon sx={{ color: '#4CAF50' }} />
              </IconContainer>
              <Box>
                <Typography variant="h4" fontWeight={600}>
                  {stats.cpuUsage}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CPU Usage
                </Typography>
              </Box>
            </CardContent>
          </StatsCard>
        </Box>
        
        <Box sx={{ gridColumn: 'span 3' }}>
          <StatsCard>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <IconContainer sx={{ background: 'rgba(255, 152, 0, 0.2)' }}>
                <MemoryIcon sx={{ color: '#FF9800' }} />
              </IconContainer>
              <Box>
                <Typography variant="h4" fontWeight={600}>
                  {stats.memoryUsage}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Memory Usage
                </Typography>
              </Box>
            </CardContent>
          </StatsCard>
        </Box>
      </MuiGrid>
      
      {/* Recent Deployments */}
      <Paper 
        sx={{ 
          p: 3, 
          mb: 4, 
          background: 'rgba(42, 42, 42, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight={600}>
            Recent Deployments
          </Typography>
          
          <Button 
            variant="contained" 
            size="small" 
            startIcon={<AddIcon />}
            color="primary"
          >
            New Deployment
          </Button>
        </Box>
        
        <Divider sx={{ mb: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <MuiGrid container spacing={3}>
            {recentDeployments.map((deployment) => {
              const providerInfo = getProviderIcon(deployment.provider);
              
              return (
                <Box sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }} key={deployment.id}>
                  <Card sx={{ 
                    height: '100%',
                    background: 'rgba(30, 30, 30, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    }
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <IconContainer sx={{ background: `rgba(${parseInt(providerInfo.color.slice(1, 3), 16)}, ${parseInt(providerInfo.color.slice(3, 5), 16)}, ${parseInt(providerInfo.color.slice(5, 7), 16)}, 0.2)` }}>
                          {React.cloneElement(providerInfo.icon as React.ReactElement, { 
                            sx: { color: providerInfo.color } 
                          })}
                        </IconContainer>
                        
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {deployment.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {deployment.provider} • {deployment.region}
                          </Typography>
                        </Box>
                        
                        <Tooltip title={getStatusText(deployment.status)}>
                          <Box sx={{ 
                            width: 12, 
                            height: 12, 
                            borderRadius: '50%', 
                            bgcolor: getStatusColor(deployment.status),
                            boxShadow: `0 0 8px ${getStatusColor(deployment.status)}`
                          }} />
                        </Tooltip>
                      </Box>
                      
                      <Typography variant="caption" color="text.secondary">
                        Created: {new Date(deployment.createdAt).toLocaleString()}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button 
                          size="small" 
                          variant="outlined"
                          sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mr: 1 }}
                        >
                          Details
                        </Button>
                        <Button 
                          size="small" 
                          variant="contained"
                          color="primary"
                        >
                          Manage
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </MuiGrid>
        )}
      </Paper>
    </>
  );
};

export default Dashboard;
