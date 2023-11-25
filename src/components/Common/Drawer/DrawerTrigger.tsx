import React from 'react'

type DrawerTriggerProps = {
  id: string
  children: React.ReactNode
}

const transYMinus = '-translate-y-full'
const transYPlus = 'translate-y-full'
const transXMinus = '-translate-x-full'
const transXPlus = 'translate-x-full'

export const DrawerTrigger: React.FC<DrawerTriggerProps> = ({
  id,
  children,
}) => {
  const selfId = `${id}-trigger`

  const toggleDrawer = () => {
    const el = document.getElementById(id)
    const selfEl = document.getElementById(selfId)

    if (el && selfEl) {
      const isContain = (className: string) => el.classList.contains(className)
      const toggleClass = (className: string, contain: boolean) =>
        el.classList.toggle(className, contain)

      // NOTE: toggle drawer position class name
      if (isContain('top')) toggleClass(transYMinus, !isContain(transYMinus))

      if (isContain('right')) toggleClass(transXPlus, !isContain(transXPlus))

      if (isContain('bottom')) toggleClass(transYPlus, !isContain(transYPlus))

      if (isContain('left')) toggleClass(transXMinus, !isContain(transXMinus))

      // NOTE: toggle drawer trigger class name
      const isCollapsed = el.className.includes('translate-')

      if (isCollapsed) {
        selfEl.classList.replace('expanded', 'collapsed')
      } else {
        selfEl.classList.replace('collapsed', 'expanded')
      }
    }
  }

  return (
    <div id={selfId} className='collapsed' onClick={toggleDrawer}>
      {children}
    </div>
  )
}
