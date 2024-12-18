import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/exampelSlice';
import { RootState } from './store/store';
import { BackgroundImage } from './components/BackgroundImage';
import { Weather } from './components/Weather';
import { BackgroundControlDt } from './components/BackgroundControlDt';
import { GoalForm } from './components/GoalForm';
import { Goals } from './components/Goals';
import { Quote } from './components/Quote';
import { BackgroundControlMb } from './components/BackgroundControlMb';
import { SocialMedia } from './components/SocialMedia';

function App() {
  const count = useSelector((state: RootState) => state.example.value as number);
  const dispatch = useDispatch();

  return (
    <>
      <BackgroundImage />
      <div className='container relative p-4 mx-auto flex flex-col  md:h-screen'>
        <header className="cols-parent text-center md:text-left">
          <Weather />
          <BackgroundControlDt />
        </header>
        <main className='w-full'>
          <GoalForm />
          <Goals />
        </main>
        <footer className="mt-auto">
          <div className="card">
            <div className="flex flex-col items-center space-y-4">
              <button 
                onClick={() => dispatch(increment())} 
                className="bg-blue-500 text-white font-bold text-2xl py-4 px-6 rounded hover:bg-blue-700"
              >count is {count}</button>
            </div>
            <div className="cols-parent">
              <Quote />
              <div className='hidden md:block'>
                <SocialMedia />
              </div>
            </div>
            <div className="cols-parent-h md:hidden my-4">
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
