import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Users, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Started - Fundify',
  description: 'Start your fundraising journey with Fundify',
}

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Get Started with Fundify
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Choose how you want to begin your fundraising journey. Whether you're an individual with a dream 
            or an organization with a mission, we have the right path for you.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>Individual Creator</CardTitle>
              </div>
              <CardDescription>
                Perfect for personal projects, creative endeavors, and individual causes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Easy campaign setup</li>
                <li>• Social media integration</li>
                <li>• Personal fundraising tools</li>
                <li>• Community support</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/signup?type=individual">
                  Start as Individual
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden border-primary">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
              Popular
            </div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                <CardTitle>Small Organization</CardTitle>
              </div>
              <CardDescription>
                Ideal for nonprofits, startups, and small businesses seeking funding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Advanced campaign management</li>
                <li>• Team collaboration tools</li>
                <li>• Analytics and reporting</li>
                <li>• Donor management system</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/signup?type=organization">
                  Start as Organization
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <CardTitle>Enterprise</CardTitle>
              </div>
              <CardDescription>
                For large organizations with complex fundraising needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Custom integrations</li>
                <li>• Dedicated support</li>
                <li>• Advanced security</li>
                <li>• White-label solutions</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact?type=enterprise">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Not sure which option is right for you?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you choose the best path for your fundraising goals.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">
              Talk to an Expert
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}