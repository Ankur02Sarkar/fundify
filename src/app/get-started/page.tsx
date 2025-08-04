'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Users, Target, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function GetStartedPage() {
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
            {t('getStarted.hero.title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            {t('getStarted.hero.subtitle')}
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>{t('getStarted.options.individual.title')}</CardTitle>
              </div>
              <CardDescription>
                {t('getStarted.options.individual.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {(t('getStarted.options.individual.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/signup?type=individual">
                  {t('getStarted.options.individual.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden border-primary">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
              {t('getStarted.options.organization.badge')}
            </div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                <CardTitle>{t('getStarted.options.organization.title')}</CardTitle>
              </div>
              <CardDescription>
                {t('getStarted.options.organization.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {(t('getStarted.options.organization.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/signup?type=organization">
                  {t('getStarted.options.organization.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <CardTitle>{t('getStarted.options.enterprise.title')}</CardTitle>
              </div>
              <CardDescription>
                {t('getStarted.options.enterprise.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {(t('getStarted.options.enterprise.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact?type=enterprise">
                  {t('getStarted.options.enterprise.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t('getStarted.help.title')}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t('getStarted.help.description')}
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">
              {t('getStarted.help.cta')}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}