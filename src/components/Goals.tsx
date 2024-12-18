import { Goal } from "./Goal";
import { goals } from "../dummy-data/goals";

export const Goals = () => {
  return (
    <section className='cols-parent grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-4'>
      {goals.map((goal, index) => (
        <Goal key={index} goal={goal} />
      ))}
    </section>
  );
};