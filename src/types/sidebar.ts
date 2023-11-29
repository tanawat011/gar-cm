import type { SIDEBAR_TYPE } from '@/constants'

export type SidebarType = (typeof SIDEBAR_TYPE)[keyof typeof SIDEBAR_TYPE]
