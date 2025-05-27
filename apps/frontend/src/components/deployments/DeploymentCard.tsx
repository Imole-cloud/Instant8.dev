import React from 'react';
import { 
  Box, 
  Typography, 
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  PlayArrow as PlayArrowIcon,
  Stop as StopIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';

interface StatusIndicatorProps {
  status: string;
}

const StatusIndicator = styled('div')<StatusIndicatorProps>(
  ({ theme, status }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: 
      status === 'running' ? theme.palette.success.main :
      status === 'stopped' ? theme.palette.error.main :
      status === 'deploying' ? theme.palette.warning.main :
      theme.palette.grey[500],
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
  }),
);

const StyledCard = styled(Card)(() => ({
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

interface DeploymentCardProps {
  deployment: {
    id: string;
    name: string;
    status: string;
    provider: string;
    region: string;
    createdAt: string;
    url?: string;
  };
  onView: (id: string) => void;
  onStart: (id: string) => void;
  onStop: (id: string) => void;
  onDelete: (id: string) => void;
}

const DeploymentCard: React.FC<DeploymentCardProps> = ({ 
  deployment,
  onView,
  onStart,
  onStop,
  onDelete
}) => {
  const getStatusText = (status: string) => {
    switch(status) {
      case 'running': return 'Running';
      case 'stopped': return 'Stopped';
      case 'deploying': return 'Deploying';
      case 'failed': return 'Failed';
      default: return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'running': return 'success.main';
      case 'stopped': return 'error.main';
      case 'deploying': return 'warning.main';
      case 'failed': return 'error.main';
      default: return 'text.secondary';
    }
  };

  return (
    <StyledCard>
      <StatusIndicator status={deployment.status} />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              {deployment.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {deployment.provider} • {deployment.region}
            </Typography>
          </Box>
          <Typography 
            variant="caption" 
            sx={{ 
              px: 1.5, 
              py: 0.5, 
              borderRadius: 1, 
              bgcolor: 'background.paper',
              color: getStatusColor(deployment.status),
              border: 1,
              borderColor: 'divider'
            }}
          >
            {getStatusText(deployment.status)}
          </Typography>
        </Box>
        
        <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
          Created: {new Date(deployment.createdAt).toLocaleString()}
        </Typography>
        
        {deployment.url && (
          <Typography variant="body2" sx={{ mb: 2, wordBreak: 'break-all' }}>
            {deployment.url}
          </Typography>
        )}
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <IconButton 
            size="small" 
            color="primary"
            onClick={() => onView(deployment.id)}
          >
            <VisibilityIcon fontSize="small" />
          </IconButton>
          
          {deployment.status === 'running' ? (
            <IconButton 
              size="small" 
              color="error"
              onClick={() => onStop(deployment.id)}
            >
              <StopIcon fontSize="small" />
            </IconButton>
          ) : deployment.status === 'stopped' ? (
            <IconButton 
              size="small" 
              color="success"
              onClick={() => onStart(deployment.id)}
            >
              <PlayArrowIcon fontSize="small" />
            </IconButton>
          ) : null}
          
          <IconButton 
            size="small" 
            color="primary"
          >
            <EditIcon fontSize="small" />
          </IconButton>
          
          <IconButton 
            size="small" 
            color="error"
            onClick={() => onDelete(deployment.id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default DeploymentCard;
