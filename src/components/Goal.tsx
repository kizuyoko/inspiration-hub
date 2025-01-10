import { Button } from "../ui/Button"

interface GoalProps {
  goal: {
    id: string;
    text: string;
    status: 'incomplete' | 'complete';
  };
  onRemove: () => void;
  onToggleCompletion: () => void;
}

export const Goal: React.FC<GoalProps> = ({ goal, onRemove, onToggleCompletion }) => {
  return (
    <article className={`box cols-parent-h ${goal.status === 'complete' ? 'complete' : ''}`}>
      <p className='flex-1 mr-4'>{goal.text}</p>
      <Button 
        onClick={onToggleCompletion}
        imgClassName="w-6 mr-1"
        src={goal.status === 'complete' ? '/checked.svg' : '/check.svg'}
        alt={goal.status}
      />
      <Button 
        onClick={onRemove}
        src='/delete.svg'
        alt='Delete'
        imgClassName='w-6 h-6'
      />
    </article>
  );
};