import axios from 'axios';

// Define interfaces for API data types
interface Credentials {
  email: string;
  password: string;
}

interface UserData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

interface DeploymentData {
  name: string;
  provider: string;
  region?: string;
  resources?: any[];
  configuration?: Record<string, any>;
}

interface ProviderData {
  name: string;
  type: string;
  credentials: Record<string, any>;
  isDefault?: boolean;
}

interface ProfileData {
  firstName?: string;
  lastName?: string;
  email?: string;
  currentPassword?: string;
  newPassword?: string;
}

interface ApiKeyData {
  name: string;
  expiresIn?: number;
}

interface QueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
  [key: string]: any;
}

// Base API configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized errors (token expired)
    if (error.response && error.response.status === 401) {
      // Clear local storage and redirect to login
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API service object
const apiService = {
  // Auth endpoints
  auth: {
    login: (credentials: Credentials) => apiClient.post('/auth/login', credentials),
    signup: (userData: UserData) => apiClient.post('/auth/signup', userData),
    logout: () => apiClient.post('/auth/logout'),
    getCurrentUser: () => apiClient.get('/auth/me'),
  },
  
  // Deployment endpoints
  deployments: {
    getAll: (params: QueryParams) => apiClient.get('/deployment-orchestrator/deployments', { params }),
    getById: (id: string) => apiClient.get(`/deployment-orchestrator/deployments/${id}`),
    create: (deploymentData: DeploymentData) => apiClient.post('/deployment-orchestrator/start', deploymentData),
    update: (id: string, deploymentData: DeploymentData) => apiClient.put(`/deployment-orchestrator/deployments/${id}`, deploymentData),
    delete: (id: string) => apiClient.delete(`/deployment-orchestrator/deployments/${id}`),
    getLogs: (id: string) => apiClient.get(`/deployment-orchestrator/deployments/${id}/logs`),
  },
  
  // Cloud provider connections
  providers: {
    getAll: () => apiClient.get('/cloud-connections'),
    getById: (id: string) => apiClient.get(`/cloud-connections/${id}`),
    create: (providerData: ProviderData) => apiClient.post('/cloud-connections', providerData),
    update: (id: string, providerData: ProviderData) => apiClient.put(`/cloud-connections/${id}`, providerData),
    delete: (id: string) => apiClient.delete(`/cloud-connections/${id}`),
    test: (id: string) => apiClient.post(`/cloud-connections/${id}/test`),
  },
  
  // Activity and audit logs
  activity: {
    getAll: (params: QueryParams) => apiClient.get('/activity-logs', { params }),
    getById: (id: string) => apiClient.get(`/activity-logs/${id}`),
  },
  
  // User settings and profile
  settings: {
    getProfile: () => apiClient.get('/users/profile'),
    updateProfile: (profileData: ProfileData) => apiClient.put('/users/profile', profileData),
    getApiKeys: () => apiClient.get('/users/api-keys'),
    createApiKey: (keyData: ApiKeyData) => apiClient.post('/users/api-keys', keyData),
    deleteApiKey: (id: string) => apiClient.delete(`/users/api-keys/${id}`),
  },
};

export default apiService;
