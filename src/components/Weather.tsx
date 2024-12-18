export const Weather = () => {
  return (
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
  );
};