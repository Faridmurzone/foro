import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';

import Header from './Components/Header/Header';
import Home from './Views/Home';
import Forum from './Views/Forum';
import Topic from './Views/Topic';
import NotFound from './Views/NotFound';
import Dashboard from './Views/Dashboard';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter
        basename="/"
      >
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forum" component={Dashboard} />
          <Route path="/forum/:subforum" component={Forum} />
          <Route path="/forum/topic" component={Topic} />
          <Redirect from="/foro" to="/forum/" />
          <Route path="*" component={NotFound} />
        </Switch>
        {/* <IndexRoute component={ForumFeed} />
        <Route path=":forum" component={ForumFeed} />
        <Route path=":forum/discussion/:discussion" component={SingleDiscussion} />
        <Route path=":forum/new_discussion" component={NewDiscussion} />
        <Route path="user/:username" component={UserProfile} /> */}
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
