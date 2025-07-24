import React from 'react'
import styles from './bento.module.css'

const BentoGridComp = () => {
  const bentoItems = [
    {
      title: "Smart Budgeting",
      description: "AI-powered budget recommendations based on your spending patterns and financial goals."
    },
    {
      title: "Investment Tracking",
      description: "Monitor your portfolio performance with real-time updates and detailed analytics."
    },
    {
      title: "Expense Analytics",
      description: "Visualize your spending habits with interactive charts and insights."
    },
    {
      title: "Goal Setting",
      description: "Set and track financial goals with personalized milestones and progress tracking."
    },
    {
      title: "Bill Reminders",
      description: "Never miss a payment with smart notifications and automated bill tracking."
    },
    {
      title: "Financial Reports",
      description: "Generate comprehensive reports to understand your financial health."
    }
  ]

  return (
    <div className={styles.bentoContainer}>
      {bentoItems.map((item, index) => (
        <div key={index} className={styles.bentoItem}>
          <h3 className={styles.bentoTitle}>{item.title}</h3>
          <p className={styles.bentoDescription}>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default BentoGridComp