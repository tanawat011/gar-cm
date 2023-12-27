export default function ThankYou() {
  return (
    <div className='flex items-center justify-center'>
      <div
        style={{
          width: '500px',
          height: 0,
          paddingBottom: '500px',
          position: 'relative',
        }}
      >
        <iframe
          src='https://giphy.com/embed/osjgQPWRx3cac'
          width='100%'
          height='100%'
          style={{
            position: 'absolute',
          }}
          frameBorder='0'
          className='giphy-embed'
          allowFullScreen
        ></iframe>

        <div className='absolute top-0 left-0 w-full h-full z-50'></div>
      </div>
    </div>
  )
}
