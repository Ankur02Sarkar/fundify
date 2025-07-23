'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@/lib/i18n';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction based on language
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <>{children}</>;
}