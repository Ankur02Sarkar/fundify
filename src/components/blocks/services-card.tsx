'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import ServiceModal from '@/components/ServiceModal'

export default function ServicesSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const services = t('services', { returnObjects: true }) as any

  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{
    title: string
    benefit: string
    detail?: string
  } | null>(null)

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-blue-950/20 dark:via-background dark:to-amber-950/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-10 bg-gradient-to-r from-blue-600 via-blue-800 to-amber-600 bg-clip-text text-transparent leading-tight">
          {services.title}
        </h2>

        <Tabs defaultValue="corporate" className="w-full">
          <TabsList className="flex justify-center mb-8 flex-wrap gap-2">
            <TabsTrigger value="corporate">
              {services.tabs.corporate}
            </TabsTrigger>
            <TabsTrigger value="personal">
              {services.tabs.personal}
            </TabsTrigger>
            <TabsTrigger value="strategic">
              {services.tabs.strategic}
            </TabsTrigger>
          </TabsList>

          {['corporate', 'personal', 'strategic'].map((category) => (
            <TabsContent key={category} value={category}>
              <p className="text-center text-muted-foreground mb-6 max-w-xl mx-auto text-base sm:text-lg">
                {services[category].description}
              </p>

              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services[category].items.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-white to-blue-50/50 dark:from-background dark:to-blue-950/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 p-5 sm:p-6 min-h-[200px] flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-accent-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-6">
                          {item.benefit}
                        </p>
                      </div>

                      <div className="mt-auto text-right">
                        <button
                          onClick={() => {
                            setSelectedService(item)
                            setOpen(true)
                          }}
                          className="inline-flex items-center text-primary font-medium group-hover:underline text-sm sm:text-base"
                        >
                          {services[category].cta}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Service Modal */}
        {selectedService && (
          <ServiceModal
            open={open}
            onOpenChange={setOpen}
            service={selectedService}
          />
        )}
      </div>
    </section>
  )
}
