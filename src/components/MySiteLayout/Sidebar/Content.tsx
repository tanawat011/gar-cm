'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const rootSite = '/my-site'

export const Content = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul>
        <li>
          <Link
            className={`link ${pathname === rootSite ? 'active' : ''}`}
            href={rootSite}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === `${rootSite}/app` ? 'active' : ''}`}
            href={`${rootSite}/app`}
          >
            App
          </Link>
        </li>
      </ul>
    </nav>
  )
}
