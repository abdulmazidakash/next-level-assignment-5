import { validateEnv } from "./utils/env";
validateEnv();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec, swaggerCssOverride } from "./config/swagger";
import { apiLimiter, authLimiter } from "./middlewares/rate-limit";
import { errorHandler } from "./middlewares/error-handler";
import healthRoutes from "./routes/health.routes";
import v1AuthRoutes from "./routes/v1.auth.routes";
import eventRoutes, { adminEventRouter } from "./routes/event.routes";
import { adminUserRouter } from "./routes/v1.admin.routes.js";
import registrationRoutes, { userRegistrationRouter } from "./routes/registration.routes";
import { stripeWebhookHandler } from "./routes/webhook.routes";
import reviewRoutes, { userReviewRouter } from "./routes/review.routes";
import invitationRoutes, { userInvitationRouter } from "./routes/invitation.routes";

const app = express();
const PORT = process.env.PORT || 5001;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// Trust proxy -- CRITICAL for Render (reverse proxy, HTTPS termination)
app.set("trust proxy", 1);

// CORS configuration -- must come before all route handlers
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || "http://localhost:3000",
    "http://localhost:3000",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));

// Security headers -- after CORS, before routes
app.use(helmet());

// Swagger API documentation -- always light mode
app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCss: swaggerCssOverride,
    customSiteTitle: "Planora API Documentation",
    swaggerOptions: {
      persistAuthorization: true,
    },
  }),
);

// Stripe webhook -- MUST come BEFORE express.json() (needs raw body for signature verification)
app.post("/api/webhooks/stripe", express.raw({ type: "application/json" }), stripeWebhookHandler);

// Body parsing for all OTHER routes (after webhook)
app.use(express.json());

// Rate limiting -- after body parsing, before route handlers
app.use("/api/v1/auth", authLimiter); // stricter limit on auth endpoints
app.use("/api/v1", apiLimiter); // general limit on all API endpoints

// --- API v1 Routes ---
app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/auth", v1AuthRoutes);
app.use("/api/v1/events", eventRoutes);
app.use("/api/v1/admin/events", adminEventRouter);
app.use("/api/v1/admin/users", adminUserRouter);
app.use("/api/v1/events/:eventId/registrations", registrationRoutes);
app.use("/api/v1/registrations", userRegistrationRouter);
app.use("/api/v1/events/:eventId/reviews", reviewRoutes);
app.use("/api/v1/reviews", userReviewRouter);
app.use("/api/v1/events/:eventId/invitations", invitationRoutes);
app.use("/api/v1/invitations", userInvitationRouter);

// Legacy health check (keep for backward compatibility with Render health checks)
app.get("/api/health", (_req, res) => {
  res.json({ success: true, data: { status: "ok", timestamp: new Date().toISOString() } });
});

// Global error handler -- MUST be last middleware (after all route mounts)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log("\n┌─────────────────────────────────────────────┐");
  console.log("│           Planora Backend Server             │");
  console.log("├─────────────────────────────────────────────┤");
  console.log(`│  Server:   ${BASE_URL}`);
  console.log(`│  Health:   ${BASE_URL}/api/v1/health`);
  console.log(`│  Swagger:  ${BASE_URL}/api/docs`);
  console.log("├─────────────────────────────────────────────┤");
  console.log(`│  Env:      ${process.env.NODE_ENV || "development"}`);
  console.log(`│  Port:     ${PORT}`);
  console.log("└─────────────────────────────────────────────┘\n");
});

export default app;
