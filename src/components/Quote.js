import React from 'react';
import Image from './Image';

const Quote = ({ quote, fetchFacts, author }) => {
  return (
    <div id="quote-box">
      <Image />
      <h3 id="text">{quote}</h3>
      <p id="author">{author}</p>
      <button id="new-quote" onClick={fetchFacts}>
        Next
      </button>
    </div>
  );
};

export default Quote;
