import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Card, CardContent } from '../ui/card'

export default function EventLoading() {
  return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Skeleton className="h-8 w-[50%]" />
        <div className="flex flex-wrap gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-10 w-36" />
        <div className="space-y-2 mt-8">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[85%]" />
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[60%]" />
        </div>
        <div className="space-y-4 mt-8">
          <Skeleton className="h-6 w-32" />
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="pt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Skeleton className="h-4 w-[70%]" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  )
}
