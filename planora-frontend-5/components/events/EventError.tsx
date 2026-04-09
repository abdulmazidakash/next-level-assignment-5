import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function EventError() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">
                Event not found
            </h1>
            <p className="text-muted-foreground mt-3">
                The event you&apos;re looking for doesn&apos;t exist or has been
                removed.
            </p>
            <Link href="/events">
                <Button variant="outline" className="mt-6">
                    Browse Events
                </Button>
            </Link>
        </div>
    )
}
