import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import App from './components/App.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Root from './components/Root.jsx';
import Dashboard from './components/Dashboard.jsx';
import ShowProject from './components/ShowProject.jsx';
// import AddProject from './components/AddProject.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Root}>
      <IndexRoute component={App} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/dashboard/projects/:id' component={ShowProject} />
    </Route>
  </Router>
), document.getElementById('root'));
