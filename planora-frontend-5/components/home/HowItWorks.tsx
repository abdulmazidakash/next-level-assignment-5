const steps = [
  {
    step: "01",
    title: "Create Your Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: "👤",
  },
  {
    step: "02",
    title: "Discover Events",
    desc: "Browse thousands of events by category, location, date, or interest.",
    icon: "🔍",
  },
  {
    step: "03",
    title: "Register & Join",
    desc: "One-click registration. Get instant confirmation and reminders.",
    icon: "🎟️",
  },
  {
    step: "04",
    title: "Enjoy & Connect",
    desc: "Attend events, meet people, and create unforgettable memories.",
    icon: "🎉",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Planora Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Getting started is easy. Follow these simple steps to discover and
            join amazing events around you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-5xl font-black text-primary/10 absolute top-4 right-5 select-none">
                {item.step}
              </span>
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xl z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}