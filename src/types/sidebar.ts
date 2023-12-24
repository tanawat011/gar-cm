import type { SIDEBAR_TYPE, SIDEBAR_STYLE } from '@/constants'

export type SidebarType = (typeof SIDEBAR_TYPE)[keyof typeof SIDEBAR_TYPE]
export type SidebarStyle = (typeof SIDEBAR_STYLE)[keyof typeof SIDEBAR_STYLE]
