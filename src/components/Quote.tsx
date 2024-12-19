import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Quote = () => {
  const { quote, author, status, error } = useSelector((state: RootState) => state.quote);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <article className="box md:flex-1 md:mr-4">
      <p>"{quote}" - by {author}</p>
    </article>
  );
};