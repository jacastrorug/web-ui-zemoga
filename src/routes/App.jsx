import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, PastTrials, HowItWokrs } from '../containers';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/past-trials" component={PastTrials} />
        <Route exact path="/how-it-works" component={HowItWokrs} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
