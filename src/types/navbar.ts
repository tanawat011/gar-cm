import type { NAVBAR_TYPE, NAVBAR_STYLE } from '@/constants'

export type NavbarType = (typeof NAVBAR_TYPE)[keyof typeof NAVBAR_TYPE]
export type NavbarStyle = (typeof NAVBAR_STYLE)[keyof typeof NAVBAR_STYLE]
