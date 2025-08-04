'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const DUBAI_COORDINATES = {
  lat: 25.2048,
  lng: 55.2708
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
}

const mapVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
}

export default function ContactContent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2"
    >
      {/* Embedded Google Maps */}
      <motion.div variants={mapVariants} className="lg:col-span-1">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/20 h-full min-h-[600px]">
          <div className="relative h-full">
            {/* Map Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background/95 to-transparent p-4">
              <h3 className="text-lg font-semibold text-foreground">Our Location</h3>
              <p className="text-sm text-muted-foreground">Dubai Internet City, UAE</p>
            </div>
            
            {/* Embedded Google Maps */}
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.2647!2d${DUBAI_COORDINATES.lng}!3d${DUBAI_COORDINATES.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20Internet%20City!5e0!3m2!1sen!2sae!4v1635000000000!5m2!1sen!2sae`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
            
            {/* Contact Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">support@fundify.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">+971 4 123 4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Dubai Internet City, Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Contact Form */}
      <motion.div variants={itemVariants} className="lg:col-span-1">
        <div className="rounded-2xl border bg-card/50 backdrop-blur-sm p-8 shadow-lg h-full">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
            <p className="text-muted-foreground">
              Ready to start your fundraising journey? Send us a message and we'll get back to you soon.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="rounded-xl border-primary/20 focus:border-primary/50"
                  placeholder="John"
                  required
                />
              </motion.div>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="rounded-xl border-primary/20 focus:border-primary/50"
                  placeholder="Doe"
                  required
                />
              </motion.div>
            </div>
            
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-xl border-primary/20 focus:border-primary/50"
                placeholder="john@example.com"
                required
              />
            </motion.div>
            
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="rounded-xl border-primary/20 focus:border-primary/50"
                placeholder="How can we help?"
                required
              />
            </motion.div>
            
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="rounded-xl border-primary/20 focus:border-primary/50 resize-none"
                placeholder="Tell us more about your project or question..."
                required
              />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button type="submit" className="w-full rounded-xl bg-primary hover:bg-primary/90 transition-colors py-3">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}