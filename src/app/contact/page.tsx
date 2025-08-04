'use client'

import ContactContent from '@/components/contact-content'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function ContactPage() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    // Initialize i18n if not already done
    if (!i18n.isInitialized) {
      import('@/lib/i18n')
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {t('contact.hero.title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t('contact.hero.subtitle')}
          </p>
        </div>
        
        <ContactContent />
      </div>
    </div>
  )
}