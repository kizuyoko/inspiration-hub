import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const BackgroundImage = () => {
  const currentIndex = useSelector((state: RootState) => state.background.currentIndex);
  const backgrounds = useSelector((state: RootState) => state.background.backgrounds);
  const currentBackground = backgrounds[currentIndex];

  return (
    <aside className='fixed w-full h-screen overflow-hidden'>
      {currentBackground && (
        <img 
          src={currentBackground.url} 
          className='object-cover w-full h-full'
          alt='Background Image'
        />
      )}
    </aside>
  )
}