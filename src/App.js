import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import SearchMoms from './components/SearchMoms/SearchMoms'
import CategoryContent from './components/CategoryCotent/CategoryContent';
import Login from './components/Login/Login'
import SingUp from './components/Signup/Signup'
import './App.css';
import AppLink from './components/AppLink/AppLink';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
    <Router>
    <Header />
    <Route exact path='/' component={SearchMoms} />
      <Switch>
      <Route  path='/login' component={Login} />
      <Route  path='/signup' component={SingUp} />
      </Switch>
      <Route exact path='/' component={CategoryContent} />
      <Route exact path='/'  component={AppLink}/>
      <Route component={Footer} />
    </Router>
    </div>
  );
}

export default App;
