"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Globe,
  CreditCard,
  Lock,
  ShieldCheck,
  Loader2,
  CalendarDays,
  MapPin,
  Users,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventCard } from "@/components/events/event-card";
import { EventCardSkeleton } from "@/components/events/event-card-skeleton";
import { AnimatedSection } from "@/components/shared/animated-section";

import { useEvents, useFeaturedEvent } from "@/hooks/use-events";
import { useJoinEvent } from "@/hooks/use-registrations";
import { useAuth } from "@/lib/auth";
import CtaSection from "@/components/home/CtaSection";
import { EventCardEvent, FeaturedEventType } from "@/types/event";
import CategoriesStat from "@/components/home/CategoriesStat";
import TickerStripe from "@/components/shared/TickerStripe";
import TickerStripeReverse from "@/components/shared/TickerStripeReverse";
import HowItWorks from "@/components/home/HowItWorks";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import FAQPreview from "@/components/home/FAQPreview";

const categories = [
  { icon: Globe, label: "Public Free", visibility: "PUBLIC", type: "FREE" },
  { icon: CreditCard, label: "Public Paid", visibility: "PUBLIC", type: "PAID" },
  { icon: Lock, label: "Private Free", visibility: "PRIVATE", type: "FREE" },
  { icon: ShieldCheck, label: "Private Paid", visibility: "PRIVATE", type: "PAID" },
] as const;


function getHeroAction(event: FeaturedEventType, user: { id: string } | null) {
  if (!user) return { label: "Login to Join", action: "login" as const };
  if (event.organizerId === user.id)
    return { label: "View Event", action: "view" as const };
  if (event.userRegistration?.status === "APPROVED")
    return { label: "You're In!", action: "disabled" as const };
  if (event.userRegistration?.status === "PENDING")
    return { label: "Pending Approval", action: "disabled" as const };
  if (event.userRegistration?.status === "BANNED")
    return { label: "Banned", action: "disabled" as const };
  if (event.visibility === "PUBLIC" && event.type === "FREE")
    return { label: "Join Event", action: "join" as const };
  if (event.visibility === "PUBLIC" && event.type === "PAID")
    return { label: `Pay ৳${event.fee} & Join`, action: "join" as const };
  if (event.visibility === "PRIVATE" && event.type === "FREE")
    return { label: "Request to Join", action: "join" as const };
  if (event.visibility === "PRIVATE" && event.type === "PAID")
    return { label: "Pay & Request", action: "join" as const };
  return { label: "Join Event", action: "join" as const };
}


/* ───────────── Page ───────────── */
export default function HomePage() {
  const router = useRouter();
  const { user } = useAuth();
  const featuredQuery = useFeaturedEvent();
  const gridQuery = useEvents({ limit: 9 });
  const joinEvent = useJoinEvent();

  const catPublicFree = useEvents({ limit: 1, visibility: "PUBLIC", type: "FREE" });
  const catPublicPaid = useEvents({ limit: 1, visibility: "PUBLIC", type: "PAID" });
  const catPrivateFree = useEvents({ limit: 1, visibility: "PRIVATE", type: "FREE" });
  const catPrivatePaid = useEvents({ limit: 1, visibility: "PRIVATE", type: "PAID" });

  const categoryCounts = [
    catPublicFree.data?.total ?? 0,
    catPublicPaid.data?.total ?? 0,
    catPrivateFree.data?.total ?? 0,
    catPrivatePaid.data?.total ?? 0,
  ];

  const heroEvent = featuredQuery.data as FeaturedEventType | null | undefined;
  const gridEvents = (gridQuery.data?.events ?? []) as EventCardEvent[];
  const heroAction = heroEvent ? getHeroAction(heroEvent, user) : null;

  const handleHeroJoin = async () => {
    if (!heroEvent || !heroAction) return;
    if (heroAction.action === "login") router.push("/login");
    else if (heroAction.action === "view") router.push(`/events/${heroEvent.id}`);
    else if (heroAction.action === "join")
      await joinEvent.mutateAsync({ eventId: heroEvent.id });
  };

  return (
    <main id="main-content" className="overflow-hidden">
      {/* ───── Hero ───── */}
      <AnimatedSection>
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-50/60 via-background to-amber-50/40 dark:from-emerald-950/20 dark:to-amber-950/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              {/* Left */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="h-4 w-4" />
                  <span>The Future of Event Management</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block">Your Ultimate</span>
                  <span className="block bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                    Event Platform
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Create, discover, and join events seamlessly. Connect with your
                  community like never before.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/events">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-105"
                    >
                      Browse Events
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/dashboard/events/create">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-xl border-2 border-emerald-600/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600/10 transition-all duration-300"
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      Create Event
                    </Button>
                  </Link>
                </div>

                {/* Mini stats */}
                <div className="flex gap-8 pt-4">
                  {[
                    { value: "10K+", label: "Active Users" },
                    { value: "500+", label: "Events Monthly" },
                    {
                      value: "4.9",
                      label: (
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          Rating
                        </span>
                      ),
                    },
                  ].map((s, i, a) => (
                    <div key={i} className="flex gap-8">
                      <div className="space-y-1">
                        <p className="text-3xl font-bold">{s.value}</p>
                        <p className="text-sm text-muted-foreground">{s.label}</p>
                      </div>
                      {i < a.length - 1 && <div className="w-px bg-border" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Featured Card */}
              <div className="w-full lg:w-1/2">
                {featuredQuery.isLoading ? (
                  <EventCardSkeleton />
                ) : heroEvent ? (
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500" />

                    <Card className="relative overflow-hidden rounded-3xl border-0 shadow-2xl bg-card/80 backdrop-blur-xl">
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-linear-to-r from-emerald-500 to-teal-500 text-white border-0 px-3 py-1 text-xs font-semibold shadow-lg">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          Featured
                        </Badge>
                      </div>

                      <div className="h-32 bg-linear-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20" />

                      <Link href={`/events/${heroEvent.id}`}>
                        <CardHeader className="pb-2 -mt-8 relative">
                          <div className="flex items-start justify-between gap-4">
                            <CardTitle className="text-2xl font-bold line-clamp-2 leading-tight">
                              {heroEvent.title}
                            </CardTitle>
                            <Badge
                              className={`shrink-0 px-4 py-1.5 text-sm font-semibold rounded-full ${heroEvent.type === "FREE"
                                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                  : "bg-linear-to-r from-amber-500 to-orange-500 text-white border-0"
                                }`}
                            >
                              {heroEvent.type === "FREE"
                                ? "FREE"
                                : `৳${heroEvent.fee}`}
                            </Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-3 text-sm">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/50">
                              <CalendarDays className="h-4 w-4 text-emerald-500" />
                              <span className="font-medium">
                                {new Date(heroEvent.date).toLocaleDateString(
                                  "en-US",
                                  { month: "short", day: "numeric", year: "numeric" },
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/50">
                              <MapPin className="h-4 w-4 text-rose-500" />
                              <span className="font-medium line-clamp-1">
                                {heroEvent.venue}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 pt-2">
                            <div className="h-10 w-10 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-semibold text-sm">
                              {heroEvent.organizer.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-medium text-sm">
                                {heroEvent.organizer.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Organizer
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Link>

                      <div className="px-6 pb-6">
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span className="font-semibold">
                              {heroEvent._count?.registrations ?? 0}
                            </span>
                            <span>joined</span>
                          </div>
                          <Button
                            size="lg"
                            className="h-12 px-6 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            disabled={
                              heroAction?.action === "disabled" ||
                              joinEvent.isPending
                            }
                            onClick={handleHeroJoin}
                          >
                            {joinEvent.isPending && (
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            {joinEvent.isPending
                              ? "Joining..."
                              : heroAction?.label ?? "Join"}
                            {!joinEvent.isPending &&
                              heroAction?.action === "join" && (
                                <ArrowRight className="ml-2 h-4 w-4" />
                              )}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                ) : (
                  <Card className="rounded-3xl border-2 border-dashed h-80 flex items-center justify-center bg-muted/30">
                    <CardContent className="text-center space-y-4">
                      <div className="h-16 w-16 rounded-full bg-muted mx-auto flex items-center justify-center">
                        <CalendarDays className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground text-lg">
                        No upcoming events yet
                      </p>
                      <Link href="/dashboard/events/create">
                        <Button
                          variant="outline"
                          className="rounded-xl border-emerald-600/30 text-emerald-700 hover:bg-emerald-600/10"
                        >
                          Create the first event
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ───── Ticker Stripes ───── */}
      <TickerStripe />
      <TickerStripeReverse />

      {/* ───── Upcoming Events ───── */}
      <AnimatedSection>
        <section className="relative py-20 sm:py-28">
          <div className="absolute inset-0 bg-linear-to-b from-background via-muted/50 to-background" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Upcoming Events
                </h2>
                <p className="text-muted-foreground text-lg">
                  Discover what`&apos;` happening near you
                </p>
              </div>
              <Link href="/events">
                <Button
                  variant="outline"
                  className="rounded-xl border-2 border-emerald-600/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 group"
                >
                  View All Events
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {gridQuery.isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <EventCardSkeleton key={i} />
                ))}
              </div>
            ) : gridEvents.length > 0 ? (
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="overflow-hidden py-4 -mx-4 px-4">
                  <div
                    className="flex gap-6 animate-scroll hover:paused"
                    style={{ width: "max-content" }}
                  >
                    {[...gridEvents, ...gridEvents].map((event, i) => (
                      <div
                        key={`${event.id}-${i}`}
                        className="w-85 shrink-0 hover:scale-[1.02] transition-transform duration-300"
                      >
                        <EventCard event={event} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="h-20 w-20 rounded-full bg-muted mx-auto flex items-center justify-center mb-4">
                  <CalendarDays className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-lg">No events found</p>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* ───── Categories ───── */}
      <AnimatedSection>
        <CategoriesStat
          categories={categories}
          categoryCounts={categoryCounts}
        />
      </AnimatedSection>

      {/* ───── Second Ticker (before CTA) ───── */}
      <TickerStripe />

       {/* New sections */}
      <HowItWorks />
      <StatsSection />
      <Testimonials />
      <Newsletter />
      <FAQPreview />

      {/* ───── CTA ───── */}
      <AnimatedSection>
            <CtaSection/>
      </AnimatedSection>
    </main>
  );
}