export const BackgroundImage = () => {
  return (
    <aside className='fixed w-full h-screen overflow-hidden'>
      <img 
        src='/background_dummy1.jpg' 
        className='object-cover w-full h-full'
        alt='Background Image'
      />
    </aside>
  )
}