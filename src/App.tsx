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
  useEffect(() => {
    dispatch(fetchBackgrounds());
  }, [dispatch]);

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
            <div className="cols-parent">
              <Quote />
              <div className='hidden md:block'>
                <SocialMedia />
              </div>
            </div>
            <div className="my-4 cols-parent-h md:hidden">
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
