"use client"

import { useState, useEffect, Suspense } from "react"
import dynamic from 'next/dynamic'
import { ErrorBoundary } from 'react-error-boundary'
import { HeroSection } from "@/components/hero-section"
import { LoadingAnimation } from "@/components/loading-animation"

const AboutSection = dynamic(() => import("@/components/about-section"), {
  loading: () => <LoadingAnimation />,
})
const HeadMastersSection = dynamic(() => import("@/components/head-masters-section"), {
  loading: () => <LoadingAnimation />,
})
const ImageGallery = dynamic(() => import("@/components/image-gallery"), {
  loading: () => <LoadingAnimation />,
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <LoadingAnimation />,
})

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
      <strong className="font-bold">Oops! Something went wrong:</strong>
      <p className="mt-2">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Try again
      </button>
    </div>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="min-h-screen">
        <HeroSection />
        <Suspense fallback={<LoadingAnimation />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<LoadingAnimation />}>
          <HeadMastersSection />
        </Suspense>
        <Suspense fallback={<LoadingAnimation />}>
          <ImageGallery />
        </Suspense>
        <Suspense fallback={<LoadingAnimation />}>
          <Footer />
        </Suspense>
      </main>
    </ErrorBoundary>
  )
}

