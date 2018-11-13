import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import client from './apolloClient';

import Home from './Home';
import Details from './Details';

import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/details/:movieId"} component={Details} />
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
