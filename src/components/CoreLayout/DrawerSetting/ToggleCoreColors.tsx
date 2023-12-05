import { Item } from './Item'

export const ToggleCoreColors = () => {
  return (
    <Item label='Core Colors'>
      <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-default' />
      <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-primary' />
      <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-secondary' />
      <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-success' />
      <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-warning' />
      <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-danger' />
    </Item>
  )
}
