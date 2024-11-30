import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export function useAuth() {
  const login = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const { data } = await axios.post(`${API_URL}/auth/login`, credentials);
      localStorage.setItem('token', data.token);
      return data;
    },
  });

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const getUser = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      if (!token) return null;
      
      try {
        const { data } = await axios.get(`${API_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        return data;
      } catch {
        localStorage.removeItem('token');
        return null;
      }
    },
  });

  return {
    login,
    logout,
    user: getUser.data,
    isLoading: getUser.isLoading,
  };
}