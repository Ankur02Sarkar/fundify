'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function SignUpPage() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    // Initialize i18n if not already done
    if (!i18n.isInitialized) {
      import('@/lib/i18n')
    }
  }, [])
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{t('signup.hero.title')}</CardTitle>
          <CardDescription>
            {t('signup.hero.subtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                  {t('signup.form.firstName')}
                </label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder={t('signup.form.firstName')}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                  {t('signup.form.lastName')}
                </label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder={t('signup.form.lastName')}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                {t('signup.form.email')}
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder={t('signup.form.email')}
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                {t('signup.form.password')}
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder={t('signup.form.password')}
                required
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-1">
                {t('signup.form.confirmPassword')}
              </label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder={t('signup.form.confirmPassword')}
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                {t('signup.form.terms')}{' '}
                <Link href="#" className="text-primary hover:underline">
                  {t('signup.form.termsLink')}
                </Link>{' '}
                {t('signup.form.and')}{' '}
                <Link href="#" className="text-primary hover:underline">
                  {t('signup.form.privacyLink')}
                </Link>
              </label>
            </div>
            
            <Button type="submit" className="w-full">
              {t('signup.form.submit')}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {t('signup.form.haveAccount')}{' '}
              <Link href="/login" className="text-primary hover:underline font-medium">
                {t('signup.form.signIn')}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}