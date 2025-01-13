import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentIndex, setQuery } from '../store/backgroundSlice';
import { AppDispatch } from '../store/store';
import { Button } from "../ui/Button"

export const BackgroundControlMb = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentIndex = useSelector((state: RootState) => state.background.currentIndex);
  const backgrounds = useSelector((state: RootState) => state.background.backgrounds);

  const handleKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      [key: string]: { value: string };
    };  
    dispatch(setQuery(target[0].value));
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    dispatch(setCurrentIndex(newIndex));
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % backgrounds.length;
    dispatch(setCurrentIndex(newIndex));
  };

  return (
    <article className="w-full box">
      <h3 className='pb-1 text-sm font-normal text-center'>Background Image Setting</h3>
      <div className='pb-2 cols-parent-h'>
        <Button 
          onClick={handlePrev}
          src='/arrow_l.svg'
          alt='←'
          imgClassName='w-7 h-7 mr-2 flex'
        />
        <form
          onSubmit={handleKeyword} 
          className='flex w-full p-2 ml-2 border border-gray-500 rounded-md'>
          <input 
            type='text'
            placeholder='Keyword'
            className="flex-1 w-full text-sm font-normal text-center focus:outline-none"
          />
          <Button 
            type='submit'
            src='/search.svg'
            alt='Search'
            title="Search"
            imgClassName='w-6 h-6 flex'
            onClick={() => {}}
          />
        </form>
        <Button 
          onClick={handleNext}
          src='/arrow_r.svg'
          alt='→'
          imgClassName='w-7 h-7 ml-2 flex'
        />
      </div>
    </article>
  );
};