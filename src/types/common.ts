import type { IconType } from '@/components/Icon'

export type CommonOption<T = string> = {
  key: T
  label: string
  icon?: IconType
}
