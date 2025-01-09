import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentIndex } from '../store/backgroundSlice';
import { AppDispatch } from '../store/store';
import { Button } from "../ui/Button"

export const BackgroundControlMb = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentIndex = useSelector((state: RootState) => state.background.currentIndex);
  const backgrounds = useSelector((state: RootState) => state.background.backgrounds);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    dispatch(setCurrentIndex(newIndex));
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % backgrounds.length;
    dispatch(setCurrentIndex(newIndex));
  };

  return (
    <article className="box md:mr-4 cols-parent-h">
      <Button 
        onClick={handlePrev}
        src='/arrow_l.svg'
        alt='←'
        imgClassName='w-7 h-7 flex'
      />
      <p className='mx-2 xs:hidden'>Bg</p>
      <p className="hidden mx-2 xs:block">Background</p>
      <Button 
        onClick={handleNext}
        src='/arrow_r.svg'
        alt='→'
        imgClassName='w-7 h-7 flex'
      />
    </article>
  );
};