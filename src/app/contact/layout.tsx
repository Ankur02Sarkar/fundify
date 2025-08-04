import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Fundify',
  description: 'Get in touch with the Fundify team',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}