import React from 'react';
import { PricingSection } from '@/components/ui/pricing';

export default function PricingComp() {
	return (
		<div className="flex min-h-screen items-center justify-center py-12">
			<PricingSection
				plans={PLANS}
				heading="AI-Powered Finance Solutions for Every Business"
				description="From startups to enterprises, our intelligent finance management and funding platform grows with your business. Transparent pricing, powerful AI, unlimited potential."
			/>
		</div>
	);
}

const PLANS = [
	{
		id: 'starter',
		name: 'Starter',
		info: 'For individuals & small businesses',
		price: {
			monthly: 29,
			yearly: Math.round(29 * 12 * (1 - 0.15)),
		},
		features: [
			{ text: 'Basic financial dashboard', tooltip: 'Track income, expenses, and cash flow' },
			{ text: 'Up to 3 loan applications' },
			{ text: 'AI expense categorization' },
			{
				text: 'Basic fund matching',
				tooltip: 'Get matched with suitable funding options',
			},
			{
				text: 'Email support',
				tooltip: 'Get help via email within 24 hours',
			},
			{ text: 'Mobile app access' },
		],
		btn: {
			text: 'Start Free Trial',
			href: '/signup?plan=starter',
		},
	},
	{
		highlighted: true,
		id: 'professional',
		name: 'Professional',
		info: 'For growing businesses',
		price: {
			monthly: 79,
			yearly: Math.round(79 * 12 * (1 - 0.20)),
		},
		features: [
			{ text: 'Everything in Starter, plus:' },
			{ text: 'Advanced financial analytics', tooltip: 'Detailed reports and forecasting' },
			{ text: 'Unlimited loan applications' },
			{ text: 'AI-powered credit scoring' },
			{
				text: 'Premium fund matching',
				tooltip: 'Access to exclusive funding opportunities',
			},
			{
				text: 'Automated loan management',
				tooltip: 'Track payments, interest, and schedules automatically',
			},
			{ text: 'Priority support', tooltip: 'Phone and chat support' },
			{ text: 'Custom reporting' },
		],
		btn: {
			text: 'Get Started',
			href: '/signup?plan=professional',
		},
	},
	{
		id: 'enterprise',
		name: 'Enterprise',
		info: 'For large organizations',
		price: {
			monthly: 199,
			yearly: Math.round(199 * 12 * (1 - 0.25)),
		},
		features: [
			{ text: 'Everything in Professional, plus:' },
			{ text: 'White-label solution' },
			{ text: 'Advanced AI risk assessment' },
			{
				text: 'Custom integrations',
				tooltip: 'Tailored integrations with your systems',
			},
			{ text: 'Dedicated account manager' },
			{
				text: 'Advanced compliance tools',
				tooltip: 'Meet regulatory requirements with ease',
			}
		],
		btn: {
			text: 'Contact Sales',
			href: '/contact?plan=enterprise',
		},
	},
];
