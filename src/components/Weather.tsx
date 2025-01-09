import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/store';
import { useEffect } from 'react';
import { fetchWeather } from '../store/weatherSlice';
import { RootState } from '../store/store';

export const Weather = () => {
  const dispatch: AppDispatch = useDispatch();
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
          <div className='flex items-center md:justify-start'>
            <img 
              src={`http://openweathermap.org/img/wn/${weather.current.condition.icon}@2x.png`} 
              alt={weather.current.condition.text}
              className='w-14'
            />
            <p className='ml-2 temperature'>{Math.round(weather.current.temp_c)} °C</p>
          </div>
          <p>{weather.current.condition.text.charAt(0).toUpperCase() + weather.current.condition.text.slice(1)}</p>
        </div>
      )}
    </article>
  );
};

export default Weather;