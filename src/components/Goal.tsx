import { Button } from "../ui/Button"

export const Goal = () => {
  return (
    <article className='box cols-parent-h'>
      <p className='flex-1 mr-4'>Read a book</p>
      <Button 
        onClick={()=>{}}
        imgClassName="w-6 mr-1"
        src='/check.svg'
        alt='Check'
      />
      <Button 
        onClick={()=>{}}
        src='/delete.svg'
        alt='Delete'
        imgClassName='w-6 h-6'
      />
    </article>
  );
};