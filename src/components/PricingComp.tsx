'use client'

import React, { useEffect } from 'react';
import { PricingSection } from '@/components/ui/pricing';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n';

export default function PricingComp() {
	const { t } = useTranslation();

	useEffect(() => {
		i18n.loadNamespaces('translation');
	}, []);

	const starterFeatures = t('pricing.plans.starter.features', { returnObjects: true }) as any[];
	const professionalFeatures = t('pricing.plans.professional.features', { returnObjects: true }) as any[];
	const enterpriseFeatures = t('pricing.plans.enterprise.features', { returnObjects: true }) as any[];

	const PLANS = [
		{
			id: 'starter',
			name: t('pricing.plans.starter.title'),
			info: t('pricing.plans.starter.description'),
			price: {
				monthly: 29,
				yearly: Math.round(29 * 12 * (1 - 0.15)),
			},
			features: starterFeatures,
			btn: {
				text: t('pricing.plans.starter.cta'),
				href: '/signup?plan=starter',
			},
		},
		{
			highlighted: true,
			id: 'professional',
			name: t('pricing.plans.professional.title'),
			info: t('pricing.plans.professional.description'),
			price: {
				monthly: 79,
				yearly: Math.round(79 * 12 * (1 - 0.20)),
			},
			features: professionalFeatures,
			btn: {
				text: t('pricing.plans.professional.cta'),
				href: '/signup?plan=professional',
			},
		},
		{
			id: 'enterprise',
			name: t('pricing.plans.enterprise.title'),
			info: t('pricing.plans.enterprise.description'),
			price: {
				monthly: 199,
				yearly: Math.round(199 * 12 * (1 - 0.25)),
			},
			features: enterpriseFeatures,
			btn: {
				text: t('pricing.plans.enterprise.cta'),
				href: '/contact?plan=enterprise',
			},
		},
	];

	return (
		<div className="flex min-h-screen items-center justify-center py-12">
			<PricingSection
				plans={PLANS}
				heading={t('pricing.hero.title')}
				description={t('pricing.hero.subtitle')}
			/>
		</div>
	);
}
