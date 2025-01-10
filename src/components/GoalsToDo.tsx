import { GoalInList } from "./GoalInList";
import { useSelector, useDispatch } from "react-redux";
import { removeGoal, toggleGoalCompletion } from "../store/goalSlice";
import { RootState } from "../store/store";

export const GoalsToDo = () => {  
  const dispatch = useDispatch();
  const goals = useSelector((state: RootState) => state.goals.goals);
  const goalsToDo = goals.filter(goal => goal.status === 'incomplete'); 


  const handleRemoveGoal = (id: string) => {
    dispatch(removeGoal(id));
  };

  const handleToggleGoalCompletion = (id: string) => {
    dispatch(toggleGoalCompletion(id));
  };

  return (
    <article className='box'>
      <h2 className='pb-2 mb-2 border-b border-black'>To Do</h2>
      {goalsToDo.map(goal => (
        <GoalInList 
          goal={goal}
          onRemove={() => handleRemoveGoal(goal.id)}
          onToggleCompletion={() => handleToggleGoalCompletion(goal.id)}
        />
      ))}
    </article>
  );
}