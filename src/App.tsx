import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/exampelSlice';
import { RootState } from './store/store';

function App() {
  const count = useSelector((state: RootState) => state.example.value as number);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Vite + React</h1>
      <div className="card">
        <div className="flex flex-col items-center space-y-4">
          <button 
            onClick={() => dispatch(increment())} 
            className="bg-blue-500 text-white font-bold text-2xl py-4 px-6 rounded hover:bg-blue-700"
          >
            count is {count}
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
