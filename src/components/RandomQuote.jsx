import { useState, useEffect } from "react";

const quotes = [
  "El Psy Kongroo",
  "I am mad scientist. It's so cool! Sonuvabitch.",
  "Humans possess the will to deny their own desires.",
  // Add more quotes...
];

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className='text-center text-xl italic mt-16 text-accent'>
      &quot;{quote}&quot;
    </div>
  );
};

export default RandomQuote;
