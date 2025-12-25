import { auth } from "@/auth";

/**
 * Get the current authenticated user session
 * @returns Promise with session or null
 */
export async function getCurrentUser() {
  const session = await auth();
  return session?.user;
}

/**
 * Check if user is authenticated
 * @returns Promise<boolean>
 */
export async function isAuthenticated(): Promise<boolean> {
  const session = await auth();
  return !!session?.user;
}

/**
 * Require authentication, redirect if not authenticated
 * Used in server components
 */
export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
}
