export interface Goal {
  id: string;
  text: string;
  status: 'incomplete' | 'complete';
}
export const goals: Goal[] = [
  {
    id: '1',
    text: 'Read a book',
    status: 'incomplete',
  },
  { 
    id: '2',
    text: 'Run outside',
    status: 'complete',
  },
  {
    id: '3',
    text: 'Meet a friend',
    status: 'incomplete',
  },
];