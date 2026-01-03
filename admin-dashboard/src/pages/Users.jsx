import { Box, Typography, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import DataTable from '../components/layout/tables/DataTable';
import { useUsers } from '../hooks/useApi';

const Users = () => {
  const { data: users, isLoading } = useUsers();

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'username', headerName: 'Username' },
    { field: 'email', headerName: 'Email' },
    { field: 'phone', headerName: 'Phone' },
    { field: 'website', headerName: 'Website' },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Users Management
        </Typography>
        <Button variant="contained" startIcon={<Add />}>
          Add User
        </Button>
      </Box>

      <DataTable
        title="All Users"
        data={users}
        columns={columns}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default Users;
