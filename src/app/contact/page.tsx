import { Metadata } from 'next'
import ContactContent from '@/components/contact-content'

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
        
        <ContactContent />
      </div>
    </div>
  )
}