'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export function Faqs() {
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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0
        }
    }

    return (
        <section className="py-16 md:py-32 bg-gradient-to-br from-amber-50 via-white to-blue-50 dark:from-amber-950/10 dark:via-background dark:to-blue-950/10">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-amber-600 text-white border-0" variant="outline">
                        {t('faqs.badge')}
                    </Badge>
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl bg-gradient-to-r from-blue-600 via-blue-800 to-amber-600 bg-clip-text text-transparent">
                        {t('faqs.title')}
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        {t('faqs.subtitle')}
                    </p>
                </motion.div>
                
                <motion.div 
                    className="mx-auto mt-8 max-w-3xl md:mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <motion.div variants={itemVariants}>
                            <AccordionItem value="item-1" className="border border-blue-100 dark:border-blue-900/20 rounded-lg px-6 bg-gradient-to-r from-white to-blue-50/30 dark:from-background dark:to-blue-950/10">
                                <AccordionTrigger className="text-left hover:text-blue-600 transition-colors">
                                    {t('faqs.questions.security.question')}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {t('faqs.questions.security.answer')}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <AccordionItem value="item-2" className="border border-amber-100 dark:border-amber-900/20 rounded-lg px-6 bg-gradient-to-r from-white to-amber-50/30 dark:from-background dark:to-amber-950/10">
                                <AccordionTrigger className="text-left hover:text-amber-600 transition-colors">
                                    {t('faqs.questions.fees.question')}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {t('faqs.questions.fees.answer')}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <AccordionItem value="item-3" className="border border-blue-100 dark:border-blue-900/20 rounded-lg px-6 bg-gradient-to-r from-white to-blue-50/30 dark:from-background dark:to-blue-950/10">
                                <AccordionTrigger className="text-left hover:text-blue-600 transition-colors">
                                    {t('faqs.questions.support.question')}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {t('faqs.questions.support.answer')}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <AccordionItem value="item-4" className="border border-amber-100 dark:border-amber-900/20 rounded-lg px-6 bg-gradient-to-r from-white to-amber-50/30 dark:from-background dark:to-amber-950/10">
                                <AccordionTrigger className="text-left hover:text-amber-600 transition-colors">
                                    {t('faqs.questions.integration.question')}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {t('faqs.questions.integration.answer')}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <AccordionItem value="item-5" className="border border-blue-100 dark:border-blue-900/20 rounded-lg px-6 bg-gradient-to-r from-white to-blue-50/30 dark:from-background dark:to-blue-950/10">
                                <AccordionTrigger className="text-left hover:text-blue-600 transition-colors">
                                    {t('faqs.questions.started.question')}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {t('faqs.questions.started.answer')}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
