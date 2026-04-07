// import dotenv from "dotenv";
// import path from "path";

// // ✅ force dotenv to load from project root
// dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// const REQUIRED_ENV = ["DATABASE_URL", "JWT_SECRET", "FRONTEND_URL"];
// const OPTIONAL_ENV = ["STRIPE_SECRET_KEY", "STRIPE_WEBHOOK_SECRET", "RESEND_API_KEY"];

// export function validateEnv() {
//   const missing: string[] = [];
//   const warnings: string[] = [];

//   for (const key of REQUIRED_ENV) {
//     if (!process.env[key]) missing.push(key);
//   }

//   for (const key of OPTIONAL_ENV) {
//     if (!process.env[key]) warnings.push(key);
//   }

//   if (warnings.length > 0) {
//     console.warn(`[env] Optional variables missing (some features disabled): ${warnings.join(", ")}`);
//   }

//   if (missing.length > 0) {
//     console.error(`[env] Required environment variables missing: ${missing.join(", ")}`);
//     console.error("[env] Check .env.example for required configuration");
//     process.exit(1);
//   }

//   console.log("✅ ENV LOADED SUCCESSFULLY");
// }

import dotenv from "dotenv";
import path from "path";

// ✅ Load ENV FIRST
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

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
    console.warn(
      `[env] Optional variables missing: ${warnings.join(", ")}`
    );
  }

  if (missing.length > 0) {
    console.error(
      `[env] Required environment variables missing: ${missing.join(", ")}`
    );
    process.exit(1);
  }

  console.log("✅ ENV LOADED SUCCESSFULLY");
}