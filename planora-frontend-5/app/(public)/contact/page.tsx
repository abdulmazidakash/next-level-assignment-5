"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-600">
          Contact Us
        </h1>
        <p className="mt-4 text-muted-foreground">
          Have questions or need help? Reach out to us anytime.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-10">

        {/* Left - Info */}
        <div className="space-y-6">

          <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 flex items-start gap-4">
            <FaEnvelope className="text-emerald-500 text-xl mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground">
                support@planora.com
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 flex items-start gap-4">
            <FaPhone className="text-emerald-500 text-xl mt-1" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-muted-foreground">
                +880 1234 567 890
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 flex items-start gap-4">
            <FaMapMarkerAlt className="text-emerald-500 text-xl mt-1" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

        </div>

        {/* Right - Form */}
        <div className="p-6 rounded-2xl border border-emerald-500/20 bg-white/50 dark:bg-emerald-950/20 backdrop-blur">

          <form className="space-y-5">

            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-2 px-3 py-2 rounded-md border border-emerald-500/20 bg-transparent focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-2 px-3 py-2 rounded-md border border-emerald-500/20 bg-transparent focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full mt-2 px-3 py-2 rounded-md border border-emerald-500/20 bg-transparent focus:outline-none"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}