import { Goal } from "./Goal";

export const Goals = () => {
  return (
    <section className='cols-parent grid grid-cols-1 md:grid-cols-2 gap-4'>
      <Goal />
      <Goal />
      <Goal />
    </section>
  );
};