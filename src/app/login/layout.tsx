import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Fundify',
  description: 'Sign in to your Fundify account',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}