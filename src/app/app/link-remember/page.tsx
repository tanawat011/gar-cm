import Link from 'next/link'

export default function LinkRemember() {
  const NextLink = ({ href, label }: any) => {
    return (
      <p>
        <Link className='underline' href={href}>
          {label}
        </Link>
      </p>
    )
  }

  return (
    <div>
      <NextLink
        label='React Icon'
        href='https://react-icons.github.io/react-icons/icons/fa6/'
      />
      <NextLink label='NextUI' href='https://nextui.org/docs/components' />
      <NextLink
        label='Dark Theme Generator'
        href='https://colorffy.com/dark-theme-generator'
      />
      <NextLink label='Color Name' href='https://www.color-name.com/hex' />
    </div>
  )
}
