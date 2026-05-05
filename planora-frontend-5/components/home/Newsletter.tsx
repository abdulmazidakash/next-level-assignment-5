"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl mx-auto mb-6">
          📬
        </div>

        <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
          Newsletter
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Stay in the Loop
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-base">
          Get the latest events, exclusive deals, and community highlights
          delivered straight to your inbox. No spam, ever.
        </p>

        {status === "success" ? (
          <div className="bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 rounded-2xl px-6 py-5 text-sm font-medium">
            🎉 You&apos;re subscribed! Check your inbox for a confirmation email.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-background text-foreground outline-none transition-all
                  ${
                    status === "error"
                      ? "border-destructive focus:ring-2 focus:ring-destructive/30"
                      : "border-border focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  }`}
              />
              {status === "error" && (
                <p className="text-xs text-destructive mt-1.5 text-left">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor" strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Subscribing...
                </span>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-5">
          🔒 We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}