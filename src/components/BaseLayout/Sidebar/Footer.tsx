import { default as pkg } from '../../../../package.json'

export const Footer = () => {
  return (
    <footer className='fixed left-0 bottom-0 w-full'>
      <div
        className='w-full p-4 text-center text-sm font-thin leading-5'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <p>Powered by tDev</p>
        <p>{pkg.version}</p>
      </div>
    </footer>
  )
}
