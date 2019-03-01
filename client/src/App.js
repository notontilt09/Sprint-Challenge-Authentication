import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom'
import Login from './components/Login/Login.js';
import Jokes from './components/Jokes/Jokes.js';

class App extends Component {
  logout() {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
        </main>
      </>
    );
  }
}

export default withRouter(App);
