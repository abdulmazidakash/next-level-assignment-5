"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">

      <div className="w-full max-w-md text-center p-8 rounded-2xl border border-emerald-500/20 bg-white/60 dark:bg-emerald-950/30 backdrop-blur shadow-lg">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaExclamationTriangle className="text-4xl text-emerald-500" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold">
          Something went wrong
        </h2>

        {/* Message */}
        <p className="text-muted-foreground mt-3">
          An unexpected error occurred. Please try again or go back to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 justify-center">

          <Button
            onClick={reset}
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            Try Again
          </Button>

          <Link href="/">
            <Button variant="outline">
              Go Home
            </Button>
          </Link>

        </div>


        {process.env.NODE_ENV === "development" && (
          <p className="mt-6 text-xs text-red-400 break-all">
            {error.message}
          </p>
        )}

      </div>
    </div>
  );
}