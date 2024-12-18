import { Button } from "../ui/Button"

export const BackgroundControlDt = () => {
  return (
    <>
      <article className="box hidden md:block max-w-52 text-center">
        <h3>Change Background Image</h3>
        <div className='cols-parent-h'>
          <Button 
            onClick={() => {}}
            src='/arrow_l.svg'
            alt='←'
            imgClassName='w-7 h-7 flex'
          />
          <Button 
            onClick={() => {}}
            src='/arrow_r.svg'
            alt='→'
            imgClassName='w-7 h-7 flex'
          />
        </div>
      </article>
      
    </>
  );
};