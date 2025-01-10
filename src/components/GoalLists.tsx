import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { GoalsDone } from './GoalsDone';
import { GoalsToDo } from './GoalsToDo';

export const GoalLists = () => {
  const goals = useSelector((state: RootState) => state.goals.goals);
  return (
    <>
      {goals?.length > 0 && (
        <section className='grid grid-cols-1 gap-4 pt-4 mt-4 border-t cols-parent md:grid-cols-2'>
          <GoalsToDo /> 
          <GoalsDone />
        </section>
      )}
    </>
  );
};