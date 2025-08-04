import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Fundify',
  description: 'Get in touch with the Fundify team',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Ready to start your fundraising journey? Our team is here to help you every step of the way.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">support@fundify.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1"
                  placeholder="Tell us more about your project or question..."
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}