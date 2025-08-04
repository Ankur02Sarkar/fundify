import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Fundify',
  description: 'Choose the perfect plan for your fundraising needs',
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}