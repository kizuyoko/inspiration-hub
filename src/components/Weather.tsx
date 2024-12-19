import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/store';
import { useEffect } from 'react';
import { fetchWeather } from '../store/weatherSlice';
import { RootState } from '../store/store';

export const Weather = () => {
  const dispatch = useDispatch<AppDispatch>();
  const weather = useSelector((state: RootState) => state.weather.weather) as {
    location: {
      name: string;
      country: string;
    };
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
  } | null;
  const status = useSelector((state: RootState) => state.weather.status);
  const error = useSelector((state: RootState) => state.weather.error);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <article className="mx-auto box md:flex md:mr-4 md:mx-0">
      {weather && (
        <div className='flex flex-col'>
          <h1 className="text-center md:text-left">{weather.location.name}, {weather.location.country}</h1>
          <div className='flex items-center justify-center py-2 md:items-start md:justify-start'>
            <img 
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
              className='w-10'
            />
            <p className='ml-6 temprature'>{weather.current.temp_c} °C</p>
          </div>
          <p>{weather.current.condition.text}</p>
        </div>
      )}
    </article>
  );
};

export default Weather;