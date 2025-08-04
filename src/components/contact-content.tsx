'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import GoogleMapReact from 'google-map-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

// Dubai coordinates
const DUBAI_COORDINATES = {
  lat: 25.0943,
  lng: 55.1560
}

// Map marker component
const MapMarker = ({ lat, lng }: { lat: number; lng: number }) => (
  <div className="relative">
    <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg animate-pulse" />
    <div className="absolute -top-1 -left-1 w-8 h-8 bg-primary/20 rounded-full animate-ping" />
  </div>
)

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
      className="mt-16 grid p-8 grid-cols-1 gap-12 lg:grid-cols-2"
    >
      {/* Google Maps with React */}
      <motion.div variants={mapVariants} className="lg:col-span-1">
        <div className="relative h-full min-h-[600px] overflow-hidden">
          {/* Google Map */}
          <div className="h-full w-full">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
              }}
              defaultCenter={DUBAI_COORDINATES}
              defaultZoom={15}
              options={{
                mapTypeId: 'roadmap', // Default to roadmap
                mapTypeControl: true,
                mapTypeControlOptions: {
                  style: 1, // HORIZONTAL_BAR
                  position: 3, // TOP_RIGHT
                  mapTypeIds: [
                    'roadmap',
                    'satellite',
                    'hybrid',
                    'terrain'
                  ]
                },
                styles: [
                  {
                    featureType: 'all',
                    elementType: 'geometry.fill',
                    stylers: [{ color: '#f5f5f5' }]
                  },
                  {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#e9e9e9' }]
                  },
                  {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#ffffff' }]
                  },
                  {
                    featureType: 'landscape',
                    elementType: 'geometry',
                    stylers: [{ color: '#f8f8f8' }]
                  },
                  {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [{ color: '#eeeeee' }]
                  }
                ],
                zoomControl: true,
                zoomControlOptions: {
                  position: 7 // RIGHT_BOTTOM
                },
                streetViewControl: true,
                streetViewControlOptions: {
                  position: 7 // RIGHT_BOTTOM
                },
                fullscreenControl: true,
                fullscreenControlOptions: {
                  position: 6 // RIGHT_TOP
                },
                scrollwheel: true,
                gestureHandling: 'cooperative'
              }}
            >
              <MapMarker lat={DUBAI_COORDINATES.lat} lng={DUBAI_COORDINATES.lng} />
            </GoogleMapReact>
          </div>
          
          {/* Top Left Contact Card */}
          <motion.div 
            className="absolute top-6 left-6 bg-white shadow-lg p-4 min-w-[200px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Phone:</p>
                <p className="text-sm text-gray-600">+971 4 123 4567</p>
              </div>
            </div>
          </motion.div>
          
          {/* Bottom Right Contact Cards */}
          <div className="absolute bottom-6 right-6 space-y-3">
            <motion.div 
              className="bg-white shadow-lg p-4 min-w-[250px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Location:</p>
                  <p className="text-sm text-gray-600">Dubai Internet City, Dubai, UAE</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white shadow-lg p-4 min-w-[250px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email:</p>
                  <p className="text-sm text-gray-600">contact@fundify.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Contact Form */}
      <motion.div variants={itemVariants} className="lg:col-span-1">
        <div className="border rounded-2xl bg-card/50 backdrop-blur-sm p-8 shadow-lg h-full">
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
            
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex-1"
              >
                <Button type="submit" className="w-full rounded-xl bg-primary hover:bg-primary/90 transition-colors py-3">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex-1"
              >
                <Button 
                  type="button"
                  onClick={() => window.open('https://wa.me/+971412345678', '_blank')}
                  className="w-full rounded-xl bg-green-600 hover:bg-green-700 transition-colors py-3"
                >
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </Button>
              </motion.div>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}