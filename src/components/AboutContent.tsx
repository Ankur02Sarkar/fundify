'use client'

import { motion } from 'framer-motion'
import TeamSection from '@/components/team'

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
            About Fundify
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We're on a mission to democratize fundraising and make it accessible to everyone, 
            from individual creators to large organizations.
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
              Our Mission
            </h2>
            <p className="mt-4 text-muted-foreground">
              At Fundify, we believe that great ideas shouldn't be limited by financial constraints. 
              Our platform empowers individuals and organizations to bring their visions to life 
              through innovative fundraising solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="p-8 rounded-2xl bg-gradient-to-br from-white/80 to-blue-50/50 dark:from-background/80 dark:to-blue-950/20 backdrop-blur-sm border border-blue-100 dark:border-blue-900/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="mt-4 text-muted-foreground">
              We envision a world where funding flows freely to the most impactful projects, 
              creating positive change across communities and industries worldwide.
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
            Who We Are
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-white/60 to-blue-50/40 dark:from-background/60 dark:to-blue-950/20 backdrop-blur-sm border border-blue-100 dark:border-blue-900/20"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg text-muted-foreground mb-6"
              variants={itemVariants}
            >
              Fundify was born from a simple observation: too many brilliant ideas never see the light of day 
              due to funding barriers. Founded in 2023 by a team of passionate entrepreneurs, technologists, 
              and financial experts, we set out to bridge the gap between innovative projects and the capital 
              they need to succeed.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground mb-6"
              variants={itemVariants}
            >
              Our diverse team brings together decades of experience from fintech, venture capital, 
              and startup ecosystems. We understand both sides of the funding equation – the challenges 
              faced by project creators and the needs of investors and backers looking for meaningful 
              opportunities to support.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              Today, Fundify serves thousands of creators, entrepreneurs, and organizations worldwide, 
              having facilitated over $50 million in successful funding campaigns. We're not just a platform; 
              we're a community dedicated to turning ideas into reality.
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
            Our Values
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
                Transparency
              </h3>
              <p className="mt-2 text-muted-foreground">Clear, honest communication in all our interactions</p>
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
                Innovation
              </h3>
              <p className="mt-2 text-muted-foreground">Continuously improving our platform and services</p>
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
                Community
              </h3>
              <p className="mt-2 text-muted-foreground">Building connections between funders and creators</p>
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