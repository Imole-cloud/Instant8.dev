import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '../../theme/theme';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [selectedItem, setSelectedItem] = React.useState('dashboard');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleItemSelect = (item: string) => {
    setSelectedItem(item);
    setMobileOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header onMenuToggle={handleDrawerToggle} />
        <Sidebar 
          open={true} 
          onClose={handleDrawerToggle} 
          selectedItem={selectedItem} 
          onItemSelect={handleItemSelect} 
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 260px)` },
            ml: { sm: '260px' },
            mt: '64px',
            overflow: 'auto'
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
