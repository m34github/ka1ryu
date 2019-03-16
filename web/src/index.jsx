import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import SampleA from './components/SampleA.jsx'
import SampleB from './components/SampleB.jsx'
import { theme } from './style.js';

const App = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/sample/A" component={SampleA} />
            <Route path="/sample/B" component={SampleB} />
            <Redirect to="/sample/A" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
