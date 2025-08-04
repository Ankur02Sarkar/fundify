'use client'

import AboutContent from '@/components/AboutContent'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function AboutPage() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    // Initialize i18n if not already done
    if (!i18n.isInitialized) {
      import('@/lib/i18n')
    }
  }, [])

  return <AboutContent />
}