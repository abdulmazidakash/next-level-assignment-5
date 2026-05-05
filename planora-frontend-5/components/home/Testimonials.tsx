interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Event Organizer",
    avatar: "SJ",
    rating: 5,
    text: "Planora completely transformed how I manage events. The platform is intuitive, powerful, and my attendees love the seamless registration experience.",
  },
  {
    name: "Michael Chen",
    role: "Community Manager",
    avatar: "MC",
    rating: 5,
    text: "We have hosted over 50 events through Planora. The analytics and attendee management features are top-notch. Highly recommended for any organizer.",
  },
  {
    name: "Amina Hassan",
    role: "Workshop Facilitator",
    avatar: "AH",
    rating: 5,
    text: "I found three amazing workshops in my city within minutes. The filtering system is incredible and the event details pages are so well designed.",
  },
  {
    name: "David Park",
    role: "Tech Conference Host",
    avatar: "DP",
    rating: 5,
    text: "The dashboard gives me real-time insights on registrations and attendance. Planora is the only platform I trust for large-scale tech events.",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Yoga Instructor",
    avatar: "FA",
    rating: 5,
    text: "Setting up recurring classes was effortless. My students get automatic reminders and the payment system is completely hassle-free.",
  },
  {
    name: "James Wilson",
    role: "Music Producer",
    avatar: "JW",
    rating: 5,
    text: "I promoted my album launch event on Planora and sold out in 3 days. The reach and community here is absolutely unmatched.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Thousands of organizers and attendees trust Planora every day. Here
            is what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <StarRating count={t.rating} />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}