import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch } from '../store/store';
import { RootState } from '../store/store';
import { fetchRandomQuote } from '../store/quoteSlice';

export const Quote = () => {
  const dispatch: AppDispatch = useDispatch();
  const { quote, author, status, error } = useSelector((state: RootState) => state.quote);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

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