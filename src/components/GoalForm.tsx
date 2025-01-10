import { Button } from "../ui/Button";
import { useDispatch } from 'react-redux';
import { addGoal } from '../store/goalSlice';

export const GoalForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      [key: string]: { value: string };
    };
    const goal = {
      id: new Date().getTime().toString(),
      text: target[0].value,
      status: 'incomplete' as 'incomplete',
      onRemove: () => {},
      onToggleCompletion: () => {},
    }
    dispatch(addGoal(goal));
  };

  return (
    <form 
      className='my-3 box cols-parent'
      onSubmit={handleSubmit}
    >
      <input 
        type='text'
        placeholder='Type Your Goal'
        className="flex-1 text-center focus:outline-none" 
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