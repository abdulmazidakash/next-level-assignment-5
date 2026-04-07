import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const REQUIRED_ENV = ["DATABASE_URL", "JWT_SECRET", "FRONTEND_URL"] as const;
const OPTIONAL_ENV = [
  "STRIPE_SECRET_KEY",
  "STRIPE_WEBHOOK_SECRET",
  "RESEND_API_KEY",
] as const;

export function validateEnv() {
  const missing: string[] = [];
  const warnings: string[] = [];

  for (const key of REQUIRED_ENV) {
    if (!process.env[key]) missing.push(key);
  }

  for (const key of OPTIONAL_ENV) {
    if (!process.env[key]) warnings.push(key);
  }

  if (warnings.length > 0) {
    console.warn(`[env] Optional variables missing: ${warnings.join(", ")}`);
  }

  if (missing.length > 0) {
    throw new Error(`Missing required env vars: ${missing.join(", ")}`);
  }

  console.log("✅ ENV LOADED SUCCESSFULLY");
}