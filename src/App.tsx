import { BackgroundImage } from './components/BackgroundImage';
import { Weather } from './components/Weather';
import { BackgroundControlDt } from './components/BackgroundControlDt';
import { GoalForm } from './components/GoalForm';
import { Goals } from './components/Goals';
import { Quote } from './components/Quote';
import { BackgroundControlMb } from './components/BackgroundControlMb';
import { SocialMedia } from './components/SocialMedia';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBackgrounds } from './store/backgroundSlice';
import { AppDispatch } from './store/store';
import { GoalLists } from './components/GoalLists';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {
  const [ sorted, setSorted ] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const query = useSelector((state: RootState) => state.background.query);
  
  useEffect(() => {
    dispatch(fetchBackgrounds(query));
  }, [dispatch, query]);

  const toggleSetting = () => {
    setSorted(!sorted);
  };

  const goals = useSelector((state: RootState) => state.goals.goals);
  
  return (
    <>
      <BackgroundImage />
      <div className='container relative flex flex-col p-4 mx-auto md:h-screen'>
        <header className="text-center cols-parent md:text-left">
          <Weather />
          <BackgroundControlDt />
        </header>
        <main className='w-full'>
          <GoalForm />
          {
            sorted ? (
              <GoalLists />
            ) : (
              <Goals />
            )
          }
          {goals?.length > 0 && (
            <button 
              className='mt-2 text-white text-shadow float-end hover:opacity-70 focus:outline-none'
              onClick={toggleSetting}
            >
              {sorted ? 'Unsort Goals' : 'Sort Goals by status' }
            </button>
          )}
        </main>
        <footer className="mt-auto">
          <div className="mt-4">
            <div className="justify-end cols-parent md:justify-between">
              <Quote />
              <div className='hidden md:flex md:flex-col md:justify-end'>
                <SocialMedia />
              </div>
            </div>
            <div className="flex flex-col items-center my-4 md:hidden">
              <BackgroundControlMb />
              <SocialMedia />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
