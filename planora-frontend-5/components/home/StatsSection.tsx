"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

const stats: Stat[] = [
  { label: "Active Users", value: 10000, suffix: "+", icon: "👥" },
  { label: "Events Monthly", value: 500, suffix: "+", icon: "📅" },
  { label: "Cities Covered", value: 120, suffix: "+", icon: "🌍" },
  { label: "Success Rate", value: 98, suffix: "%", icon: "⭐" },
];

function useCounter(target: number, duration: number = 2000, start: boolean = false): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, animate }: { stat: Stat; animate: boolean }) {
  const count = useCounter(stat.value, 2000, animate);

  return (
    <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <span className="text-4xl">{stat.icon}</span>
      <p className="text-4xl font-black text-primary">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Real numbers that reflect the trust and love of our growing
            community worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}