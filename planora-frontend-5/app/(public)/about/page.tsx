"use client";

import { FaUsers, FaCalendarAlt, FaBolt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

      {/* Hero */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-emerald-600">
          About Planora
        </h1>
        <p className="mt-4 text-muted-foreground">
          Planora helps you create, discover, and manage events with ease —
          all in one modern platform.
        </p>
      </div>

      {/* Content */}
      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div className="space-y-5 text-muted-foreground">
          <p>
            Planora is your all-in-one event management platform designed to make
            organizing and joining events effortless. Whether it`&apos;` a community meetup,
            workshop, or private gathering — everything becomes simple.
          </p>

          <p>
            We focus on simplicity, speed, and reliability. Organizers can manage
            participants, track performance, and handle both free and paid events.
            Attendees can explore and join events instantly.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6">

          <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20">
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-emerald-500 text-xl" />
              <h3 className="font-semibold">Easy Event Creation</h3>
            </div>
            <p className="text-sm mt-2 text-muted-foreground">
              Create and manage events in minutes with simple tools.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20">
            <div className="flex items-center gap-4">
              <FaUsers className="text-emerald-500 text-xl" />
              <h3 className="font-semibold">Community Focused</h3>
            </div>
            <p className="text-sm mt-2 text-muted-foreground">
              Connect people and build strong communities through events.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20">
            <div className="flex items-center gap-4">
              <FaBolt className="text-emerald-500 text-xl" />
              <h3 className="font-semibold">Fast & Reliable</h3>
            </div>
            <p className="text-sm mt-2 text-muted-foreground">
              Smooth performance and real-time updates for better experience.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">
          Start your journey with Planora today 🚀
        </h2>
        <p className="text-muted-foreground mt-2">
          Create events, invite people, and grow your community.
        </p>

        <button className="mt-6 px-6 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition">
          Get Started
        </button>
      </div>

    </div>
  );
}