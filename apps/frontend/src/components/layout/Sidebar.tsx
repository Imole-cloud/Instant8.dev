import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Box, 
  Divider, 
  Typography,
  useMediaQuery
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import {
  Dashboard as DashboardIcon,
  Cloud as CloudIcon,
  Storage as StorageIcon,
  Settings as SettingsIcon,
  History as HistoryIcon,
  Code as CodeIcon
} from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  selectedItem: string;
  onItemSelect: (item: string) => void;
}

const drawerWidth = 260;

const StyledDrawer = styled(Drawer)(() => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    background: 'rgba(18, 18, 18, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  height: 64,
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const Logo = styled('div')(({ theme }) => ({
  background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5, 1),
  marginRight: theme.spacing(1),
  fontWeight: 'bold',
}));

interface StyledListItemProps {
  selected?: boolean;
}

const StyledListItem = styled(ListItem)<StyledListItemProps>(({ theme, selected }) => ({
  margin: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: selected ? 'rgba(63, 81, 181, 0.15)' : 'transparent',
  '&:hover': {
    backgroundColor: selected ? 'rgba(63, 81, 181, 0.25)' : 'rgba(255, 255, 255, 0.05)',
  },
}));

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, selectedItem, onItemSelect }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  
  const menuItems = [
    { id: 'dashboard', text: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'deployments', text: 'Deployments', icon: <StorageIcon /> },
    { id: 'providers', text: 'Cloud Providers', icon: <CloudIcon /> },
    { id: 'activity', text: 'Activity', icon: <HistoryIcon /> },
    { id: 'settings', text: 'Settings', icon: <SettingsIcon /> },
  ];

  const drawer = (
    <>
      <LogoContainer>
        <Logo>I8</Logo>
        <Typography variant="h6" noWrap>
          Instant8.dev
        </Typography>
      </LogoContainer>
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <List>
          {menuItems.map((item) => (
            <StyledListItem
              key={item.id}
              selected={selectedItem === item.id}
              onClick={() => onItemSelect(item.id)}
              sx={{ 
                color: selectedItem === item.id ? 'primary.main' : 'text.primary',
              }}
            >
              <ListItemIcon sx={{ 
                color: selectedItem === item.id ? 'primary.main' : 'text.primary',
                minWidth: 40
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItem>
          ))}
        </List>
        <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <List>
          <StyledListItem
            onClick={() => {}}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="API" />
          </StyledListItem>
        </List>
      </Box>
    </>
  );

  return (
    <>
      {/* Mobile drawer */}
      {!isDesktop && (
        <Drawer
          variant="temporary"
          open={open}
          onClose={onClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              background: 'rgba(18, 18, 18, 0.9)',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
      
      {/* Desktop drawer */}
      <StyledDrawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        {drawer}
      </StyledDrawer>
    </>
  );
};

export default Sidebar;
