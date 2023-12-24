import Link from 'next/link'

export default function LinkRemember() {
  const NextLink = ({ href, label }: { href: string; label: string }) => {
    return (
      <p>
        <Link className='underline' href={href} target='_blank'>
          {label}
        </Link>
      </p>
    )
  }

  return (
    <div>
      <NextLink label='React Icon' href='https://react-icons.github.io/react-icons/icons/fa6/' />
      <NextLink label='NextUI' href='https://nextui.org/docs/components' />
      <NextLink label='Dark Theme Generator' href='https://colorffy.com/dark-theme-generator' />
      <NextLink label='Color Name' href='https://www.color-name.com/hex' />
      <NextLink label='Make Logo' href='https://www.brandcrowd.com/maker/logos' />
      <NextLink label='Crop Image' href='https://www.iloveimg.com/crop-image' />
      <NextLink label='Color Palette Generator' href='https://materialpalettes.com/' />
      <NextLink label='DaisyUI' href='https://daisyui.com/components/button/' />
      <NextLink label='Sample UI from NextUI' href='https://nextui-dashboard-template.vercel.app/' />
    </div>
  )
}
