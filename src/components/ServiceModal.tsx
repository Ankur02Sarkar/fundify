'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'

interface ServiceModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  service: {
    title: string
    benefit: string
    detail?: string
  }
}

export default function ServiceModal({
  open,
  onOpenChange,
  service,
}: ServiceModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[90vw] sm:max-w-md md:max-w-lg bg-white dark:bg-zinc-900 backdrop-blur-md px-4 py-6 sm:px-6 sm:py-8 rounded-xl overflow-y-auto max-h-[90vh]"
      >
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-accent-foreground">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-muted-foreground mt-2">
            {service.benefit}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {service.detail ??
            'More detailed information about this service will be shown here. You can customize this per service item.'}
        </div>
      </DialogContent>
    </Dialog>
  )
}
