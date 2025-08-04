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
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Pricing cards will be implemented here */}
          <div className="rounded-lg border bg-card p-8 text-center">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="mt-4 text-3xl font-bold">Free</p>
            <p className="mt-2 text-muted-foreground">Perfect for getting started</p>
          </div>
          
          <div className="rounded-lg border bg-card p-8 text-center">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-4 text-3xl font-bold">$29/mo</p>
            <p className="mt-2 text-muted-foreground">For growing campaigns</p>
          </div>
          
          <div className="rounded-lg border bg-card p-8 text-center">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-4 text-3xl font-bold">Custom</p>
            <p className="mt-2 text-muted-foreground">For large organizations</p>
          </div>
        </div>
      </div>
    </div>
  )
}