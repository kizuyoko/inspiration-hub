import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from './store/store';
import { useEffect } from 'react';
import { fetchRandomQuote } from './store/quoteSlice';
import { BackgroundImage } from './components/BackgroundImage';
import { Weather } from './components/Weather';
import { BackgroundControlDt } from './components/BackgroundControlDt';
import { GoalForm } from './components/GoalForm';
import { Goals } from './components/Goals';
import { Quote } from './components/Quote';
import { BackgroundControlMb } from './components/BackgroundControlMb';
import { SocialMedia } from './components/SocialMedia';

function App() {
  const quoteDispatch: AppDispatch = useDispatch();
  //const dispatch = useDispatch();
  
  useEffect(() => {
    quoteDispatch(fetchRandomQuote());
  }, [quoteDispatch]);

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
          <div className="card">
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
