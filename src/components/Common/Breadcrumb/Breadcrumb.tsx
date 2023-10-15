import React from 'react'

import Link from 'next/link'

type ItemProps = {
  title: string
  link: string
  active?: boolean
}

const Item: React.FC<ItemProps> = ({ title, link, active }) => {
  if (active) {
    return <li className='text-neutral-500 dark:text-neutral-400'>{title}</li>
  }

  return (
    <li>
      <Link
        href={{ pathname: link }}
        className='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
      >
        {title}
      </Link>
    </li>
  )
}

const Separator = () => {
  return (
    <li>
      <span className='mx-2 text-neutral-500 dark:text-neutral-400'>{'>'}</span>
    </li>
  )
}

type BreadcrumbProps = {
  className?: string
  items: ItemProps[]
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ className, items }) => {
  return (
    <nav className={`bg-grey-light w-full rounded-md ${className}`}>
      <ol className='list-reset flex'>
        <Item title='Home' link='/' />

        <Separator />

        {items.map((item, index) => {
          return (
            <React.Fragment key={`breadcrumb-${item.title}`}>
              <Item
                title={item.title}
                link={item.link}
                active={index === items.length - 1}
              />

              {index < items.length - 1 && <Separator />}
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
