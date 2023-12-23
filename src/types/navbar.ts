import type { NAVBAR_TYPE } from '@/constants'

export type NavbarType = (typeof NAVBAR_TYPE)[keyof typeof NAVBAR_TYPE]
