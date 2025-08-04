import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Fundify',
  description: 'Discover our comprehensive fundraising services',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}