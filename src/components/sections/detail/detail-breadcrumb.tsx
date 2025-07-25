import { HomeIcon } from 'lucide-react'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface DetailBreadcrumbProps {
  category: string
}

export default function DetailBreadcrumb({ category }: DetailBreadcrumbProps) {
  return (
    <header className='flex gap-2 py-5 items-center'>
      <HomeIcon size={18} />
      <Breadcrumb className="flex items-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}
