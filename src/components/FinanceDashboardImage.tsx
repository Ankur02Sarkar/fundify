'use client'
import React from 'react'
import Image from 'next/image'
import { AnimatedGroup } from './ui/animated-group'
import { useTranslation } from 'react-i18next'

const transitionVariants = {
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', bounce: 0.3, duration: 2 },
    },
  },
}

export default function FinanceDashboardImage() {
  const { t } = useTranslation()

  return (
    <AnimatedGroup
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.75,
            },
          },
        },
        ...transitionVariants,
      }}
    >
      <div className="relative mt-12 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Image
            className="w-full aspect-[15/8] rounded-2xl shadow-lg ring-1 ring-border"
            src="/finance-dashboard.png"
            alt={t('hero.imageAlt')}
            width={2700}
            height={1440}
          />

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 rounded-b-2xl bg-gradient-to-t from-white/90 dark:from-[#0a0a0a]/90 to-transparent z-10" />
        </div>
      </div>
    </AnimatedGroup>
  )
}
