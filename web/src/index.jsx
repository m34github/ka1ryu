import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import SampleA from './components/SampleA.jsx'
import SampleB from './components/SampleB.jsx'
import Auth from './components/Auth.jsx'
import DomainList from './components/DomainList.jsx'
import DomainSelect from './components/DomainSelect.jsx'
import { theme } from './style';

const App = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/sample/A" component={SampleA} />
            <Route path="/sample/B" component={SampleB} />
            <Route path="/auth" component={Auth} />
            <Route path="/domain/list" component={DomainList} />
            <Route path="/domain/select" component={DomainSelect} />
            <Redirect to="/auth" />
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
