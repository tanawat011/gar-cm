'use client'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('@/components/MySiteLayout'), {
  ssr: false,
})

type MySiteProps = {
  children: React.ReactNode
}

export default function MySite({ children }: MySiteProps) {
  return <DynamicComponent>{children}</DynamicComponent>
}
