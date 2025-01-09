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

function App() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBackgrounds());
  }, [dispatch]);

  
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
          <Goals />
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
