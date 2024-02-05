export type ShowOffContent = {
  title: string
  id: string
  render?: () => JSX.Element
  children?: ShowOffContent[]
}
