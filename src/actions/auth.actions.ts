"use server";

import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "@/auth";
import { AuthError } from "next-auth";

/**
 * Sign in with GitHub provider
 * @returns Promise<void>
 */
export async function signInWithGitHub() {
  try {
    await nextAuthSignIn("github", { redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Invalid credentials");
        default:
          throw new Error("Something went wrong");
      }
    }
    throw error;
  }
}

/**
 * Sign out the current user
 * @returns Promise<void>
 */
export async function signOutUser() {
  try {
    await nextAuthSignOut({ redirectTo: "/" });
  } catch (error) {
    throw error;
  }
}
