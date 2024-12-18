import { quotes } from "../dummy-data/quotes";

export const Quote = () => {
  // Select a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <article className="box md:flex-1 md:mr-4">
      <p>"{randomQuote.quote}" by {randomQuote.author}  </p>
    </article>
  );
}