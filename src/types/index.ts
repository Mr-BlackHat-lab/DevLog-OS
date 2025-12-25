// Authentication Types
export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export interface Session {
  user: User;
  expires: string;
}

// Log Types
export interface DevLog {
  _id: string;
  title: string;
  content: string;
  mood:
    | "productive"
    | "learning"
    | "struggling"
    | "breakthrough"
    | "reflecting";
  createdAt: string;
  updatedAt: string;
}

export interface LogFormData {
  title: string;
  content: string;
  mood: DevLog["mood"];
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  logs: T[];
  page: number;
  totalPages: number;
  total: number;
}

// Filter Types
export interface LogFilters {
  q?: string;
  mood?: DevLog["mood"];
  page?: string;
}
