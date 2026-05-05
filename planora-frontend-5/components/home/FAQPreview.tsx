"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: "Is Planora free to use?",
    a: "Yes! Creating an account and browsing events is completely free. Some premium events may have a ticket price set by the organizer.",
  },
  {
    q: "How do I create an event?",
    a: "After logging in, go to your Dashboard and click Create Event. Fill in the details, set the visibility and type, and publish — it is that simple.",
  },
  {
    q: "Can I host both free and paid events?",
    a: "Absolutely. Planora supports both free and paid events. For paid events, our secure payment system handles all transactions safely.",
  },
  {
    q: "How do attendees register for events?",
    a: "Attendees can register with a single click from the event details page. They receive instant confirmation and reminders via email.",
  },
  {
    q: "Can I cancel my registration?",
    a: "Yes, you can cancel your registration from your dashboard up to the cancellation deadline set by the event organizer.",
  },
];

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-2xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/40 transition-colors"
      >
        <span className="text-sm font-semibold text-foreground pr-4">
          {faq.q}
        </span>
        <span
          className={`text-primary text-xl shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Have questions? We have got answers. If you need more help, visit
            our full support page.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4 transition-all"
          >
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}