import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default ({ id, thumbnail, onRemoveClick }) => (
  <div className="card-container">
    <img src={thumbnail} className="card-image"/>
    <div className="card-controls">
      <div className="card-remove" onClick={onRemoveClick}>
        X
      </div>
      <span className="card-play"><Link to={`/watch/${id}`}>▶︎</Link></span>
    </div>
  </div>
);
