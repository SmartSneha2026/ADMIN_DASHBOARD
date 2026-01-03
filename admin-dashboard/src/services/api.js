import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API functions
export const fetchUsers = async () => {
  const { data } = await api.get('/users');
  return data;
};

export const fetchPosts = async () => {
  const { data } = await api.get('/posts');
  return data;
};

export const fetchDashboardStats = async () => {
  // Simulated dashboard stats
  return {
    totalUsers: 2543,
    totalRevenue: 45678,
    totalOrders: 1234,
    conversionRate: 3.24,
  };
};

export const fetchSalesData = async () => {
  // Simulated sales data for charts
  return [
    { month: 'Jan', sales: 4000, revenue: 2400, profit: 1200 },
    { month: 'Feb', sales: 3000, revenue: 1398, profit: 900 },
    { month: 'Mar', sales: 2000, revenue: 9800, profit: 1500 },
    { month: 'Apr', sales: 2780, revenue: 3908, profit: 1100 },
    { month: 'May', sales: 1890, revenue: 4800, profit: 1400 },
    { month: 'Jun', sales: 2390, revenue: 3800, profit: 1300 },
    { month: 'Jul', sales: 3490, revenue: 4300, profit: 1600 },
  ];
};

export const fetchCategoryData = async () => {
  return [
    { name: 'Electronics', value: 400, color: '#8884d8' },
    { name: 'Clothing', value: 300, color: '#82ca9d' },
    { name: 'Food', value: 200, color: '#ffc658' },
    { name: 'Books', value: 100, color: '#ff7300' },
  ];
};

export default api;
