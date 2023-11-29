import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const Menu = () => {
  return (
    <StyledContainer>
      <br />
      <br />

      <p className='underline'>
        <Link href={'/'}>Dashboard</Link>
      </p>

      <p className='underline'>
        <Link href={'/app/link-remember'}>Link Remember</Link>
      </p>

      <p className='underline'>
        <Link href={'/app/to-do'}>Road Map</Link>
      </p>

      <p className='underline'>
        <Link href={'/error'}>Example Error Page</Link>
      </p>

      <p className='underline'>
        <Link href={'/not-found'}>Example Not-Found Page</Link>
      </p>
    </StyledContainer>
  )
}

const StyledContainer = styled.div(() => {
  return [tw`h-[calc(100%-(var(--navbar-h)*2))] px-4`]
})
