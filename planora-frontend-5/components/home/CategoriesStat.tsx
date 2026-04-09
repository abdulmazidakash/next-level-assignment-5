import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import { Category } from '@/types/category';
import { ArrowRight } from 'lucide-react';



type Props = {
    categories: readonly Category[];
    categoryCounts: number[];
};

export default function CategoriesStat({ categories, categoryCounts }: Props) {
    return (
        <div>
        <section className="relative py-20 sm:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-amber-50/30 dark:from-emerald-950/10 dark:to-amber-950/10" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Explore by Category
              </h2>
              <p className="text-muted-foreground text-lg">
                Find the perfect event type that matches your interests
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                const count = categoryCounts[idx];
                const gradients = [
                  "from-emerald-500 to-teal-500",
                  "from-amber-500 to-orange-500",
                  "from-sky-500 to-indigo-500",
                  "from-rose-500 to-pink-500",
                ];

                return (
                  <Link
                    key={cat.label}
                    href={`/events?visibility=${cat.visibility}&type=${cat.type}`}
                  >
                    <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${gradients[idx]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />
                      <CardContent className="p-8 relative">
                        <div
                          className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${gradients[idx]} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="h-7 w-7 text-white" />
                        </div>

                        <h3 className="font-bold text-xl mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {cat.label}
                        </h3>

                        <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                          {count}
                          <span className="text-sm font-normal text-muted-foreground ml-2">
                            events
                          </span>
                        </p>

                        <div className="mt-4 flex items-center text-sm text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          <span>Explore</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        </div>
    )
}
