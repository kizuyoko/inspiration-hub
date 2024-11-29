import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/exampelSlice';
import { RootState } from './store/store';

function App() {
  const count = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-center">Vite + React</h1>
      <div className="card">
        <div className="flex flex-col items-center space-y-4">
          <button 
            onClick={() => dispatch(increment())} 
            className="bg-blue-500 text-white font-bold text-2xl py-4 px-6 rounded hover:bg-blue-700"
          >
            count is {count}
          </button>
          <button 
            onClick={() => dispatch(increment())} 
            className="bg-green-500 text-white font-bold text-2xl py-4 px-6 rounded hover:bg-green-700"
          >
            Increment Again
          </button>
          <button 
            onClick={() => dispatch(increment())} 
            className="bg-red-500 text-white font-bold text-2xl py-4 px-6 rounded hover:bg-red-700"
          >
            Another Increment
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
