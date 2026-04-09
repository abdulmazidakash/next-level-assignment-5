"use client";

import Link from "next/link";
import { FaRegCalendarTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-b from-emerald-50/20 to-emerald-950/10 dark:from-emerald-950/20 dark:to-emerald-950/40">

      <div className="text-center max-w-md p-8 rounded-2xl border border-emerald-500/20 bg-white/60 dark:bg-emerald-950/30 backdrop-blur shadow-lg">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaRegCalendarTimes className="text-emerald-500 text-5xl" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          Oops! Page Not Found
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-6">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Button */}
        <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white">
          <Link href="/">Go to Homepage</Link>
        </Button>

        {/* Optional hint for dev */}
        <p className="mt-4 text-xs text-emerald-700/60 dark:text-emerald-300/50">
          Tip: Check the URL or go back to the home page.
        </p>

      </div>
    </div>
  );
}