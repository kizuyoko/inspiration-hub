import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentIndex, setQuery} from '../store/backgroundSlice';
import { AppDispatch } from '../store/store';
import { Button } from "../ui/Button"

export const BackgroundControlDt = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentIndex = useSelector((state: RootState) => state.background.currentIndex);
  const backgrounds = useSelector((state: RootState) => state.background.backgrounds);

  const handleKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      [key: string]: { value: string };
    };  
    //console.log(target[0].value);
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
    <>
      <article className="hidden text-center box md:block max-w-50">
        <h3 className='text-lg'>Change Background Image</h3>
        <form
          onSubmit={handleKeyword} 
          className='flex my-3 border border-gray-500 rounded-md'>
          <input 
            type='text'
            placeholder='Keyword ex. landscape'
            className="flex-1 w-48 p-2 text-sm font-normal text-center focus:outline-none"
          />
          <Button 
            type='submit'
            src='/search.svg'
            alt='Search'
            title="Search"
            imgClassName='w-6 h-6 flex mx-2' 
            onClick={() => {}}
          />
        </form>
        <div className='cols-parent-h'>
          <Button 
            onClick={handlePrev}
            src='/arrow_l.svg'
            alt='←'
            imgClassName='w-7 h-7 flex'
          />
          <Button 
            onClick={handleNext}
            src='/arrow_r.svg'
            alt='→'
            imgClassName='w-7 h-7 flex'
          />
        </div>
      </article>
      
    </>
  );
};