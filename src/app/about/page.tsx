import AboutContent from '@/components/AboutContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Fundify',
  description: 'Learn about Fundify\'s mission to revolutionize fundraising',
}

export default function AboutPage() {
  return <AboutContent />
}