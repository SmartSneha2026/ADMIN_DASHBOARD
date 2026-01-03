import { Grid, Box, Typography, Chip } from '@mui/material';
import {
  People,
  AttachMoney,
  ShoppingCart,
  TrendingUp,
} from '@mui/icons-material';
import StatCard from '../components/layout/StatCard';
import SalesChart from '../components/layout/charts/SalesChart';
import CategoryPieChart from '../components/layout/charts/PieChart';
import RevenueAreaChart from '../components/layout/charts/AreaChart';
import DataTable from '../components/layout/tables/DataTable';
import { useDashboardStats, useUsers } from '../hooks/useApi';

const Dashboard = () => {
  const { data: stats, isLoading: statsLoading } = useDashboardStats();
  const { data: users, isLoading: usersLoading } = useUsers();

  const userColumns = [
    {
      field: 'name',
      headerName: 'Name',
      renderCell: (/** @type {{ id: any; name: string | number | bigint | boolean | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined> | null | undefined; }} */ row) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            component="img"
            src={`https://i.pravatar.cc/40?u=${row.id}`}
            sx={{ width: 40, height: 40, borderRadius: '50%' }}
          />
          {row.name}
        </Box>
      ),
    },
    { field: 'email', headerName: 'Email' },
    { field: 'phone', headerName: 'Phone' },
    {
      field: 'company',
      headerName: 'Company',
      renderCell: (/** @type {{ company: { name: any; }; }} */ row) => row.company?.name,
    },
    {
      field: 'status',
      headerName: 'Status',
      renderCell: () => (
        <Chip
          label={Math.random() > 0.5 ? 'Active' : 'Inactive'}
          color={Math.random() > 0.5 ? 'success' : 'default'}
          size="small"
        />
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Welcome back, John! 👋
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Here's what's happening with your business today.
      </Typography>

      {/* Stat Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Users"
            value={stats?.totalUsers?.toLocaleString() || '0'}
            icon={<People />}
            trend="up"
            trendValue="+12.5%"
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Revenue"
            value={`$${stats?.totalRevenue?.toLocaleString() || '0'}`}
            icon={<AttachMoney />}
            trend="up"
            trendValue="+8.2%"
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Orders"
            value={stats?.totalOrders?.toLocaleString() || '0'}
            icon={<ShoppingCart />}
            trend="down"
            trendValue="-3.1%"
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Conversion Rate"
            value={`${stats?.conversionRate || 0}%`}
            icon={<TrendingUp />}
            trend="up"
            trendValue="+1.2%"
            color="info"
          />
        </Grid>
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} lg={8}>
          <SalesChart />
        </Grid>
        <Grid item xs={12} lg={4}>
          <CategoryPieChart />
        </Grid>
      </Grid>

      {/* Area Chart */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <RevenueAreaChart />
        </Grid>
      </Grid>

      {/* Users Table */}
      <DataTable
        title="Recent Users"
        data={users}
        columns={userColumns}
        isLoading={usersLoading}
      />
    </Box>
  );
};

export default Dashboard;
