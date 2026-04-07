// import Stripe from "stripe";

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY;

if (!stripeSecret) {
  console.error("❌ STRIPE_SECRET_KEY is missing in .env");
  throw new Error("Stripe initialization failed");
}

export const stripe = new Stripe(stripeSecret, {
  apiVersion: "2026-03-25.dahlia",
});