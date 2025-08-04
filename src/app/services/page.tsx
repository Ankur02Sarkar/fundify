'use client'

import ServicesCard from '@/components/blocks/services-card'
import FooterSection from '@/components/footer'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function ServicesPage() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    // Initialize i18n if not already done
    if (!i18n.isInitialized) {
      import('@/lib/i18n')
    }
  }, [])

  return (
    <>
      <main className="py-2 px-6">
        <ServicesCard />
      </main>
      <FooterSection />
    </>
  )
}
