import PricingComp from '@/components/PricingComp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Fundify',
  description: 'Choose the perfect plan for your fundraising needs',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Pricing Plans
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the perfect plan for your fundraising journey
          </p>
        </div>
        
        <PricingComp />
      </div>
    </div>
  )
}