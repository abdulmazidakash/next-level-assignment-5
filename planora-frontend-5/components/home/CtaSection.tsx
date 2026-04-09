import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Zap } from 'lucide-react'

export default function CtaSection() {
    return (
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white mb-8">
                  <Zap className="h-4 w-4" />
                  <span>Start your journey today</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
                  Ready to create unforgettable experiences?
                </h2>

                <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Join thousands of event organizers who trust our platform to
                  bring people together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/dashboard/events/create">
                    <Button
                      size="lg"
                      className="h-14 px-8 text-base font-semibold rounded-xl bg-white text-emerald-700 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      Create Your Event
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/events">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 text-base font-semibold rounded-xl bg-transparent border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                    >
                      Browse Events
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
