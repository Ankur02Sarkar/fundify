'use client'

import { Logo } from '@/components/logo'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'



export default function Footer() {
    const { t } = useTranslation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-amber-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <motion.div 
                className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                            <Logo className="text-white" uniColor />
                            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                                Fundify
                            </span>
                        </div>
                        <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
                            {t('footer.description')}
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center text-blue-100">
                                <Mail className="size-4 mr-3 text-amber-400" />
                                <span className="text-sm">contact@fundify.ae</span>
                            </div>
                            <div className="flex items-center text-blue-100">
                                <Phone className="size-4 mr-3 text-amber-400" />
                                <span className="text-sm">+971 4 123 4567</span>
                            </div>
                            <div className="flex items-center text-blue-100">
                                <MapPin className="size-4 mr-3 text-amber-400" />
                                <span className="text-sm">Dubai, United Arab Emirates</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4 text-amber-200">{t('footer.services.title')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                                    {t('footer.services.expense')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                                    {t('footer.services.investment')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                                    {t('footer.services.budgeting')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                                    {t('footer.services.reports')}
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4 text-amber-200">{t('footer.company.title')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                                    {t('footer.company.about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                                    {t('footer.company.careers')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                                    {t('footer.company.contact')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">
                                    {t('footer.company.blog')}
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Social Media & Bottom Section */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-12 pt-8 border-t border-blue-800/30"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <motion.a 
                                href="#" 
                                className="text-blue-200 hover:text-white transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Facebook className="size-5" />
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="text-blue-200 hover:text-white transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Twitter className="size-5" />
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="text-blue-200 hover:text-white transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Linkedin className="size-5" />
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="text-blue-200 hover:text-white transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Instagram className="size-5" />
                            </motion.a>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                            <div className="flex space-x-6 text-sm">
                                <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                                    {t('footer.legal.privacy')}
                                </Link>
                                <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                                    {t('footer.legal.terms')}
                                </Link>
                                <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                                    {t('footer.legal.cookies')}
                                </Link>
                            </div>
                            <p className="text-blue-200 text-sm">
                                © 2024 Fundify. {t('footer.rights')}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    )
}
