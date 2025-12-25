/**
 * Application Constants
 */

export const APP_NAME = "DevLog OS";

export const MOOD_OPTIONS = [
  { value: "productive", label: "Productive 🚀", color: "#10b981" },
  { value: "learning", label: "Learning 📚", color: "#3b82f6" },
  { value: "struggling", label: "Struggling 😓", color: "#f59e0b" },
  { value: "breakthrough", label: "Breakthrough 💡", color: "#8b5cf6" },
  { value: "reflecting", label: "Reflecting 🤔", color: "#6366f1" },
] as const;

export const ROUTES = {
  home: "/",
  login: "/login",
  dashboard: "/dashboard",
  logs: "/logs",
  projects: "/projects",
  api: {
    logs: "/api/logs",
    auth: "/api/auth",
  },
} as const;

export const PAGINATION = {
  defaultPage: 1,
  itemsPerPage: 5,
} as const;

export const ERROR_MESSAGES = {
  auth: {
    unauthorized: "You must be logged in to access this page",
    sessionExpired: "Your session has expired. Please login again",
  },
  logs: {
    fetchFailed: "Failed to fetch logs",
    createFailed: "Failed to create log",
    updateFailed: "Failed to update log",
    deleteFailed: "Failed to delete log",
    notFound: "Log not found",
  },
  general: {
    somethingWrong: "Something went wrong. Please try again",
    networkError: "Network error. Please check your connection",
  },
} as const;
