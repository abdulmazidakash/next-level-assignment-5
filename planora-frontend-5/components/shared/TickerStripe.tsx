

export default function TickerStripe() {

    const tickerItems = [
        "🎉 New events every day",
        "🔥 Trending now",
        "🌍 Join the community",
        "⚡ Instant registration",
        "🎯 Discover local events",
        "🚀 Free to get started",
        "💎 Premium experiences",
        "🤝 Connect with organizers",
    ];
    return (
        <div className="relative overflow-hidden bg-foreground py-3 -rotate-1 scale-[1.02] shadow-lg z-10">
            <div className="flex animate-ticker whitespace-nowrap">
                {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                    <span
                        key={i}
                        className="mx-8 text-sm font-semibold tracking-wide text-background uppercase select-none"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}
