import { Box, Typography, Grid } from '@mui/material';
import SalesChart from '../components/layout/charts/SalesChart';
import CategoryPieChart from '../components/layout/charts/PieChart';
import RevenueAreaChart from '../components/layout/charts/AreaChart';

const Analytics = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Analytics
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Detailed insights and performance metrics.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SalesChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <CategoryPieChart />
        </Grid>
        <Grid item xs={12}>
          <RevenueAreaChart />
        </Grid>
      </Grid>
    </Box>

  );
};

export default Analytics;
