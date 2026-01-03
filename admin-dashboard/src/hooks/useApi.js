import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchUsers,
  fetchPosts,
  fetchDashboardStats,
  fetchSalesData,
  fetchCategoryData,
} from '../services/api';

// Dashboard stats hook
export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboardStats'],
    queryFn: fetchDashboardStats,
  });
};

// Sales data hook
export const useSalesData = () => {
  return useQuery({
    queryKey: ['salesData'],
    queryFn: fetchSalesData,
  });
};

// Category data hook
export const useCategoryData = () => {
  return useQuery({
    queryKey: ['categoryData'],
    queryFn: fetchCategoryData,
  });
};

// Users hook
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};

// Posts hook
export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};
