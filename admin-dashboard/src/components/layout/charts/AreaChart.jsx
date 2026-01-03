import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useSalesData } from '../../../hooks/useApi';

const RevenueAreaChart = () => {
  const theme = useTheme();
  const { data, isLoading } = useSalesData();

  if (isLoading) {
    return (
      <Card>
        <CardContent>
          <Typography>Loading...</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Revenue Trend
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="profit"
                stackId="1"
                stroke={theme.palette.success.main}
                fill={theme.palette.success.light}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="2"
                stroke={theme.palette.primary.main}
                fill={theme.palette.primary.light}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RevenueAreaChart;
