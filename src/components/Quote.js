import React from 'react';
import Image from './Image';

const Quote = ({ quote, getQuotes }) => {
  return (
    <div id="quote-box">
      <Image />
      <h3 id="text">{quote}</h3>
      <button id="new-quote" onClick={getQuotes}>
        Next
      </button>
    </div>
  );
};

export default Quote;
