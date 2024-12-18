import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/exampelSlice';
import { RootState } from './store/store';

function App() {
  const count = useSelector((state: RootState) => state.example.value as number);
  const dispatch = useDispatch();

  return (
    <div 
      className="bg-custom-pattern md:h-screen bg-cover bg-center w-full" 
      style={{ backgroundImage: "url('/background_dummy4.jpg')" }}
    >
      <div className='container relative p-4 mx-auto flex flex-col md:h-screen'>
        <header className="cols-parent text-center md:text-left">
          <article className="box md:flex md:mr-4 mx-auto md:mx-0">
            <div className='flex flex-col'>
              <h1 className="text-center md:text-left">Stockholm, SE</h1>
              <div className='flex items-center justify-center py-2'>
                <img 
                  src='/sun.svg'
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
              <button>
                <img 
                  src='/arrow_l.svg'
                  alt='Previous'
                  className='w-7 h-7 flex'
                />
              </button>
              <button>  
                <img 
                  src='/arrow_r.svg'
                  alt='Next'
                  className='w-7 h-7 flex'
                />
              </button>  
            </div>
          </article>
        </header>
        <main className='w-full'>
          <form className='box my-3 cols-parent'>
            <input 
              type='text'
              placeholder='Type Your Goal'
              className="focus:outline-none flex-1 text-center" 
            />
            <button className="hidden md:block" type='submit'>
              <img 
                src='/arrow_d.svg'
                alt='Next'
                className='w-10 h-10 flex'
              />
            </button>
          </form>
          <section className='cols-parent grid grid-cols-1 md:grid-cols-2 gap-4'>
            <article className='box cols-parent-h'>
              <p className='flex-1 mr-4'>Read a book</p>
              <button>
                <img 
                  src='/check.svg'
                  alt='Check'
                  className='w-6 mr-1'
                />
              </button>
              <button>
                <img 
                  src='/delete.svg'
                  alt='Delete'
                  className='w-6 h-6'
                />
              </button>
            </article>
            <article className='box cols-parent-h'>
              <p className='flex-1 mr-4'>Dentist</p>
              <button>
                <img 
                  src='/check.svg'
                  alt='Check'
                  className='w-6 mr-1'
                />
              </button>
              <button>
                <img 
                  src='/delete.svg'
                  alt='Delete'
                  className='w-6 h-6'
                />
              </button>
            </article>
            <article className='box cols-parent-h'>
              <p className='flex-1 mr-4'>Brush Teeth</p>
              <button>
                <img 
                  src='/check.svg'
                  alt='Check'
                  className='w-6 mr-1'
                />
              </button>
              <button>
                <img 
                  src='/delete.svg'
                  alt='Delete'
                  className='w-6 h-6'
                />
              </button>
            </article>
            <article className='box cols-parent-h'>
              <p className='flex-1 mr-4'>Walking</p>
              <button>
                <img 
                  src='/check.svg'
                  alt='Check'
                  className='w-6 mr-1'
                />
              </button>
              <button>
                <img 
                  src='/delete.svg'
                  alt='Delete'
                  className='w-6 h-6'
                />
              </button>
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
                <p>All happiness depends on a leisurely breakfast. -  Joh Gunter</p>
              </article>
              <article className="box hidden md:flex cols-parent-h">
                <a href="https://github.com/kizuyoko/inspiration-hub" className="mr-2">
                  <img 
                    src='/github.svg'
                    alt='GitHub'
                    className='w-6'
                  />
                </a>
                <a href="https://github.com/kizuyoko/inspiration-hub">
                  <img 
                    src='/linkedin.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
              </article>
            </div>
            <div className="cols-parent-h md:hidden my-4">
              <article className="box md:mr-4 cols-parent-h">
                <a href="https://github.com/kizuyoko/inspiration-hub">
                  <img 
                    src='/arrow_l.svg'
                    alt='Previous'
                    className='w-6'
                  />
                </a>
                <p className='flex-1 mx-2'>background</p>
                <a href="https://github.com/kizuyoko/inspiration-hub">
                  <img 
                    src='/arrow_r.svg'
                    alt='Next'
                    className='w-6'
                  />
                </a>
              </article>
              <article className="box cols-parent-h">
                <a href="https://github.com/kizuyoko/inspiration-hub" className="mr-2">
                  <img 
                    src='/github.svg'
                    alt='GitHub'
                    className='w-6'
                  />
                </a>
                <a href="https://github.com/kizuyoko/inspiration-hub">
                  <img 
                    src='/linkedin.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
              </article>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
