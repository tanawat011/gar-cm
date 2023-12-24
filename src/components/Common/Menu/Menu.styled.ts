import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const StyledUlContainer = styled.ul(() => {
  return [tw`list-none scroll-smooth`]
})

export const StyledItem = styled(Link)<{ id: string; lvl: 1 | 2 | 3; $activeItem: string }>(({
  id,
  lvl,
  $activeItem,
}) => {
  const activated = $activeItem === id || $activeItem.split('.')[0] === id

  return [
    tw`cursor-pointer rounded-lg flex items-center justify-between h-12 pr-3 mb-1`,
    tw`hover:bg-slate-300/20`,
    lvl === 1 && tw`pl-4`,
    lvl === 2 && tw`pl-11`,
    lvl === 3 && tw`pl-16`,
    activated ? tw`text-blue-600 font-semibold` : tw`text-black dark:text-white`,
    activated && lvl === 1 ? tw`bg-blue-200/20` : tw`bg-transparent`,
  ]
})
