import React from 'react';
import axios from 'axios';
  
function DisplayQuote({ quote }) {
  return (
    <div className="Displayquote">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js" integrity="sha256-S1J4GVHHDMiirir9qsXWc8ZWw74PHHafpsHp5PXtjTs=" crossorigin="anonymous"></script>
        <p>{quote.character}</p>
        <img
        src={quote.image}
        alt={quote.character}
        />
        <p>{quote.quote}</p>
    </div>
  );
};
  
export default DisplayQuote;