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
      <DialogContent className="max-w-md md:max-w-lg bg-white dark:bg-zinc-900 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-accent-foreground">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {service.benefit}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 text-sm text-muted-foreground leading-relaxed">
          {service.detail ??
            'More detailed information about this service will be shown here. You can customize this per service item.'}
        </div>
        <DialogClose asChild>
          <button className="absolute top-4 right-4 text-muted-foreground hover:text-primary">
            <X className="w-5 h-5" />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
