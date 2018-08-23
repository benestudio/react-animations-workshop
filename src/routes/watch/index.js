import React from 'react';
import './styles.css';

export default ({ match : { params } }) => (
  <div className="watch-container">
    <iframe
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${params.id}?autoplay=1`}
      frameBorder="0">
    </iframe>
  </div>
);
