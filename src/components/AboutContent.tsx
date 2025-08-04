'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import TeamSection from '@/components/team'
import { useTranslation } from 'react-i18next'
import i18n from '@/lib/i18n'

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
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
}

export default function AboutContent() {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.loadNamespaces('translation');
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950/10 dark:via-background dark:to-blue-900/10">
      {/* Top white to transparent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 bg-clip-text text-transparent sm:text-6xl"
            variants={itemVariants}
          >
            {t('aboutContent.title')}
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {t('aboutContent.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="mt-16 max-w-5xl m-auto grid grid-rows-1 gap-12 lg:grid-rows-2 px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="p-8 rounded-2xl bg-gradient-to-br from-white/80 to-blue-50/50 dark:from-background/80 dark:to-blue-950/20 backdrop-blur-sm border border-blue-100 dark:border-blue-900/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {t('aboutContent.mission.title')}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t('aboutContent.mission.description')}
            </p>
          </motion.div>
          
          <motion.div 
            className="p-8 rounded-2xl bg-gradient-to-br from-white/80 to-blue-50/50 dark:from-background/80 dark:to-blue-950/20 backdrop-blur-sm border border-blue-100 dark:border-blue-900/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {t('aboutContent.vision.title')}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t('aboutContent.vision.description')}
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8"
            variants={itemVariants}
          >
            {t('aboutContent.whoWeAre.title')}
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-white/60 to-blue-50/40 dark:from-background/60 dark:to-blue-950/20 backdrop-blur-sm border border-blue-100 dark:border-blue-900/20"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg text-muted-foreground mb-6"
              variants={itemVariants}
            >
              {t('aboutContent.whoWeAre.paragraph1')}
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground mb-6"
              variants={itemVariants}
            >
              {t('aboutContent.whoWeAre.paragraph2')}
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              {t('aboutContent.whoWeAre.paragraph3')}
            </motion.p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {t('aboutContent.values.title')}
          </motion.h2>
          <motion.div 
            className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white/70 to-blue-50/40 dark:from-background/70 dark:to-blue-950/20 backdrop-blur-sm border border-blue-100 dark:border-blue-900/20"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                {t('aboutContent.values.transparency.title')}
              </h3>
              <p className="mt-2 text-muted-foreground">{t('aboutContent.values.transparency.description')}</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white/70 to-blue-50/40 dark:from-background/70 dark:to-blue-950/20 backdrop-blur-sm border border-blue-100 dark:border-blue-900/20"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                {t('aboutContent.values.innovation.title')}
              </h3>
              <p className="mt-2 text-muted-foreground">{t('aboutContent.values.innovation.description')}</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white/70 to-blue-50/40 dark:from-background/70 dark:to-blue-950/20 backdrop-blur-sm border border-blue-100 dark:border-blue-900/20"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                {t('aboutContent.values.community.title')}
              </h3>
              <p className="mt-2 text-muted-foreground">{t('aboutContent.values.community.description')}</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <TeamSection/>
        </motion.div>
      </div>
    </div>
  )
}