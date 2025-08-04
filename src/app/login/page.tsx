'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function LoginPage() {
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
          <CardTitle className="text-2xl font-bold">{t('login.hero.title')}</CardTitle>
          <CardDescription>
            {t('login.hero.subtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                {t('login.form.email')}
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder={t('login.form.email')}
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                {t('login.form.password')}
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder={t('login.form.password')}
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                  {t('login.form.rememberMe')}
                </label>
              </div>
              
              <Link href="#" className="text-sm text-primary hover:underline">
                {t('login.form.forgotPassword')}
              </Link>
            </div>
            
            <Button type="submit" className="w-full">
              {t('login.form.submit')}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {t('login.form.noAccount')}{' '}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                {t('login.form.signUp')}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}