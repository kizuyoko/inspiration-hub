import { useSelector, useDispatch } from 'react-redux';
import { Goal } from './Goal';
import { RootState } from '../store/store';
import { removeGoal, toggleGoalCompletion } from '../store/goalSlice';

export const Goals = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state: RootState) => state.goals.goals);

  const handleRemoveGoal = (id: string) => {
    dispatch(removeGoal(id));
  };

  const handleToggleGoalCompletion = (id: string) => {
    dispatch(toggleGoalCompletion(id));
  };

  return (
    <section className='grid grid-cols-1 gap-4 cols-parent xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>
      {goals.map(goal => (
        <Goal 
          key={goal.id} 
          goal={goal}
          onRemove={() => handleRemoveGoal(goal.id)}
          onToggleCompletion={() => handleToggleGoalCompletion(goal.id)}
        />
      ))}
    </section>
  );
};