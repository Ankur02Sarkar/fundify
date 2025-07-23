'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TrendingUp, Shield, BarChart3 } from 'lucide-react'
import { ReactNode } from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

export function Features() {
    const { t } = useTranslation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <section className="py-16 md:py-32 bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-blue-950/20 dark:via-background dark:to-amber-950/20">
            <div className="@container mx-auto max-w-5xl px-6">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl bg-gradient-to-r from-blue-600 via-blue-800 to-amber-600 bg-clip-text text-transparent">
                        {t('features.title')}
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </motion.div>
                
                <motion.div 
                    className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <Card className="group border-0 bg-gradient-to-br from-white to-blue-50/50 dark:from-background dark:to-blue-950/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <CardHeader className="pb-3 relative">
                                <CardDecorator>
                                    <TrendingUp className="size-6 text-blue-600" aria-hidden />
                                </CardDecorator>
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-blue-500/20"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{ 
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <h3 className="mt-6 font-medium text-lg">{t('features.expense.title')}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">{t('features.expense.description')}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card className="group border-0 bg-gradient-to-br from-white to-amber-50/50 dark:from-background dark:to-amber-950/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <CardHeader className="pb-3 relative">
                                <CardDecorator>
                                    <Shield className="size-6 text-amber-600" aria-hidden />
                                </CardDecorator>
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-amber-500/20"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{ 
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <h3 className="mt-6 font-medium text-lg">{t('features.investment.title')}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">{t('features.investment.description')}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card className="group border-0 bg-gradient-to-br from-white to-blue-50/50 dark:from-background dark:to-blue-950/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <CardHeader className="pb-3 relative">
                                <CardDecorator>
                                    <BarChart3 className="size-6 text-blue-600" aria-hidden />
                                </CardDecorator>
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-blue-500/20"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{ 
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <h3 className="mt-6 font-medium text-lg">{t('features.insights.title')}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">{t('features.insights.description')}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-100 dark:from-blue-900/20 dark:to-amber-900/20 opacity-30"/>
        <div className="absolute inset-0 [--border:rgb(59,130,246)] dark:[--border:rgb(147,197,253)] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"/>
        <div className="bg-gradient-to-br from-white to-blue-50 dark:from-background dark:to-blue-950/20 absolute inset-0 m-auto flex size-12 items-center justify-center border border-blue-200 dark:border-blue-800 rounded-lg shadow-sm">{children}</div>
    </div>
)
