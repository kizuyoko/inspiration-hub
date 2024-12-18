import { Button } from "../ui/Button"

export const BackgroundControlMb = () => {
  return (
    <article className="box md:mr-4 cols-parent-h">
      <Button 
        onClick={() => {}}
        src='/arrow_l.svg'
        alt='←'
        imgClassName='w-7 h-7 flex'
      />
      <p className='xs:hidden mx-2'>Bg</p>
      <p className="hidden xs:block mx-2">Background</p>
      <Button 
        onClick={() => {}}
        src='/arrow_r.svg'
        alt='→'
        imgClassName='w-7 h-7 flex'
      />
    </article>
  );
};