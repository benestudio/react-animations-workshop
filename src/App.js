import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Search from './routes/search';
import Watch from './routes/watch';
import Whale from './routes/whale';
import './App.css';

export default () => (
  <Router>
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="route"
          timeout={800}
        >
          <Switch location={location}>
            <Route path="/whale" component={Whale} />
            <Route path="/watch/:id" component={Watch} />
            <Route component={Search} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}/>
  </Router>
);
