import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/exampelSlice';
import { RootState } from './store/store';

function App() {
  const count = useSelector((state: RootState) => state.example.value as number);
  const dispatch = useDispatch();

  return (
    <div 
      className="bg-custom-pattern h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/src/assets/background_dummy.png')" }}
    >
      <section className='container relative p-4 mx-auto flex flex-col h-screen'>
        <header className="cols-parent text-center md:text-left">
          <article className="box md:flex md:mr-4 mx-auto md:mx-0">
            <div className='flex flex-col'>
              <h1 className="text-center md:text-left">Stockholm, SE</h1>
              <div className='flex items-center justify-center py-2'>
                <img 
                  src='/src/assets/sun.svg'
                  alt='Sunny'
                  className='w-10'
                />
                <p className='temprature ml-6'>-12 °C</p>
              </div>
              <p>Broken clouds</p>
            </div>  
          </article>
          <article className="box hidden md:block max-w-52 text-center">
            <h3>Change Background Image</h3>
            <div className='cols-parent-h'>
                <img 
                  src='/src/assets/arrow_l.svg'
                  alt='Previous'
                  className='w-7 h-7 flex'
                />
                <img 
                  src='/src/assets/arrow_r.svg'
                  alt='Next'
                  className='w-7 h-7 flex'
                />
            </div>
          </article>
        </header>
        <main className='w-full'>
          <section className='box my-3 cols-parent'>
            <input 
              type='text'
              placeholder='Type Your Goal'
              className="focus:outline-none flex-1 text-center" 
            />
            <button className="hidden md:block">
              <img 
                src='/src/assets/arrow_d.svg'
                alt='Next'
                className='w-10 h-10 flex'
              />
            </button>
          </section>
          <section className='cols-parent grid grid-cols-1 md:grid-cols-2 gap-4'>
            <article className='box'>
              aaa
            </article>
            <article className='box'>
              bbb
            </article>
            <article className='box'>
              ccc
            </article>
          </section>
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
              <article className="box md:flex-1 md:mr-4">
                <h1>jj</h1>
              </article>
              <article className="box hidden md:block">
                <h2>Right</h2>
              </article>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default App
