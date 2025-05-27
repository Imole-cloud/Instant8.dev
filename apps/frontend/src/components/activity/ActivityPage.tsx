import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Chip,
  IconButton,
  Tooltip,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Info as InfoIcon,
  FilterList as FilterListIcon,
  Search as SearchIcon
} from '@mui/icons-material';

// Mock data for activity logs
const mockActivityLogs = [
  {
    id: 'act-1',
    action: 'Deployment Created',
    resource: 'Production API',
    user: 'admin@example.com',
    timestamp: '2025-05-20T14:30:00Z',
    status: 'success',
  },
  {
    id: 'act-2',
    action: 'Provider Connected',
    resource: 'AWS Production',
    user: 'admin@example.com',
    timestamp: '2025-05-20T13:45:00Z',
    status: 'success',
  },
  {
    id: 'act-3',
    action: 'Deployment Updated',
    resource: 'Staging Environment',
    user: 'developer@example.com',
    timestamp: '2025-05-20T12:15:00Z',
    status: 'success',
  },
  {
    id: 'act-4',
    action: 'Deployment Stopped',
    resource: 'Development Server',
    user: 'developer@example.com',
    timestamp: '2025-05-20T10:30:00Z',
    status: 'success',
  },
  {
    id: 'act-5',
    action: 'Provider Authentication Failed',
    resource: 'GCP Staging',
    user: 'admin@example.com',
    timestamp: '2025-05-19T16:20:00Z',
    status: 'error',
  },
  {
    id: 'act-6',
    action: 'User Login',
    resource: 'System',
    user: 'admin@example.com',
    timestamp: '2025-05-19T09:10:00Z',
    status: 'success',
  },
  {
    id: 'act-7',
    action: 'Resource Deleted',
    resource: 'Test Database',
    user: 'developer@example.com',
    timestamp: '2025-05-18T15:40:00Z',
    status: 'success',
  },
  {
    id: 'act-8',
    action: 'Deployment Failed',
    resource: 'Analytics Service',
    user: 'developer@example.com',
    timestamp: '2025-05-18T11:25:00Z',
    status: 'error',
  },
  {
    id: 'act-9',
    action: 'User Created',
    resource: 'System',
    user: 'admin@example.com',
    timestamp: '2025-05-17T14:15:00Z',
    status: 'success',
  },
  {
    id: 'act-10',
    action: 'Settings Updated',
    resource: 'System',
    user: 'admin@example.com',
    timestamp: '2025-05-17T10:05:00Z',
    status: 'success',
  },
];

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  '& td, & th': {
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const ActivityPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading] = useState(false);

  // Handle page change
  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Get status chip color
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'success': return 'success';
      case 'error': return 'error';
      case 'warning': return 'warning';
      default: return 'default';
    }
  };

  // Format timestamp
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
          Activity Log
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track all actions and events in your Instant8.dev environment.
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Tooltip title="Search">
            <IconButton sx={{ mr: 1 }}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <TableContainer>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell>Resource</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Timestamp</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockActivityLogs
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((log) => (
                    <StyledTableRow key={log.id}>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.resource}</TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell>{formatTimestamp(log.timestamp)}</TableCell>
                      <TableCell>
                        <Chip 
                          label={log.status} 
                          color={getStatusColor(log.status) as any}
                          size="small"
                          sx={{ textTransform: 'capitalize' }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton size="small">
                          <InfoIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={mockActivityLogs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default ActivityPage;
