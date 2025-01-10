import { GoalInList } from "./GoalInList";
import { useSelector, useDispatch } from "react-redux";
import { removeGoal, toggleGoalCompletion } from "../store/goalSlice";
import { RootState } from "../store/store";

export const GoalsDone = () => {  
  const dispatch = useDispatch();
  const goals = useSelector((state: RootState) => state.goals.goals);
  const goalsDone = goals.filter(goal => goal.status === 'complete');

  const handleRemoveGoal = (id: string) => {
    dispatch(removeGoal(id));
  };

  const handleToggleGoalCompletion = (id: string) => {
    dispatch(toggleGoalCompletion(id));
  };

  return (
    <article className='box complete'>
      <h2 className='pb-2 mb-2 border-b border-gray-500'>
        Done
      </h2>
     {goalsDone.map(goal => (
        <GoalInList 
          goal={goal}
          onRemove={() => handleRemoveGoal(goal.id)}
          onToggleCompletion={() => handleToggleGoalCompletion(goal.id)}
        />
      ))}
    </article>
  );
}