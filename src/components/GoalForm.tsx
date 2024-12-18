import { Button } from "../ui/Button";

export const GoalForm = () => {
  return (
    <form className='box my-3 cols-parent'>
      <input 
        type='text'
        placeholder='Type Your Goal'
        className="focus:outline-none flex-1 text-center" 
      />
      <Button 
        type='submit'
        src='/arrow_d.svg'
        alt='↓'
        title="Add Your Goal"
        buttonClassName="hidden md:block"
        imgClassName='w-10 h-10 flex'
      />
    </form>
  );
};