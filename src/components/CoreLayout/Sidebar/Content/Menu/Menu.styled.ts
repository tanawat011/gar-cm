import tw, { styled } from 'twin.macro'

export const StyledContainer = styled.div(() => {
  return [tw`h-[calc(100%-(var(--navbar-h)*2))] text-sm  select-none`]
})

export const StyledUlContainer = styled.ul(() => {
  return [tw`list-none px-3`]
})

export const StyledItem = styled.a<{ id: string; lvl: 1 | 2 | 3; activeName: string }>(({ id, lvl, activeName }) => {
  const activated = activeName === id || activeName.split('.')[0] === id

  return [
    tw`cursor-pointer rounded-lg flex items-center justify-between h-12 pr-3 mb-1 `,
    tw`hover:bg-slate-300/20 `,
    lvl === 1 && tw`pl-4`,
    lvl === 2 && tw`pl-11`,
    lvl === 3 && tw`pl-16`,
    activated ? tw`text-blue-600 font-semibold` : tw`text-slate-500`,
    activated && lvl === 1 ? tw`bg-blue-200/20` : tw`bg-transparent`,
  ]
})
