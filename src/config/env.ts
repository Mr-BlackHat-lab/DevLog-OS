/**
 * Environment Variables
 * Centralized configuration for environment variables
 */

export const env = {
  // MongoDB
  mongodbUri: process.env.MONGODB_URI!,

  // NextAuth
  authSecret: process.env.AUTH_SECRET!,
  githubId: process.env.AUTH_GITHUB_ID!,
  githubSecret: process.env.AUTH_GITHUB_SECRET!,

  // App
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  nodeEnv: process.env.NODE_ENV,

  // Validate required env vars
  validate() {
    const required = [
      "MONGODB_URI",
      "AUTH_SECRET",
      "AUTH_GITHUB_ID",
      "AUTH_GITHUB_SECRET",
    ];

    const missing = required.filter((key) => !process.env[key]);

    if (missing.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missing.join(", ")}`
      );
    }
  },
} as const;
