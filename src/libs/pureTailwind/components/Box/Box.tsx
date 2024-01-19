import React, { useMemo } from 'react'

type BoxProps = {
  children: React.ReactNode
  className?: string
}

export const Box: React.FC<BoxProps> = ({ children, className }) => {
  const generateClassName = useMemo(() => {
    return [className, 'border border-solid border-gray-600 rounded-xl'].join(' ').replace(/  +/g, ' ')
  }, [className])

  return <div className={generateClassName}>{children}</div>
}
