import TeamSection from '@/components/team'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Fundify',
  description: 'Learn about Fundify\'s mission to revolutionize fundraising',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            About Fundify
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to democratize fundraising and make it accessible to everyone, 
            from individual creators to large organizations.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              At Fundify, we believe that great ideas shouldn't be limited by financial constraints. 
              Our platform empowers individuals and organizations to bring their visions to life 
              through innovative fundraising solutions.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              We envision a world where funding flows freely to the most impactful projects, 
              creating positive change across communities and industries worldwide.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground">Transparency</h3>
              <p className="mt-2 text-muted-foreground">Clear, honest communication in all our interactions</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground">Innovation</h3>
              <p className="mt-2 text-muted-foreground">Continuously improving our platform and services</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground">Community</h3>
              <p className="mt-2 text-muted-foreground">Building connections between funders and creators</p>
            </div>
          </div>
        </div>

        <TeamSection/>
      </div>
    </div>
  )
}