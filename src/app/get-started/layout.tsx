import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started - Fundify',
  description: 'Start your fundraising journey with Fundify',
}

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}