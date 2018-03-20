import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import './simple-line-icons.css';
import './themify-icons.css';
import './style.css';

import Home from './components/Home';
import BusinessDetail from './components/BusinessDetail';


function App() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/business/:id" exact component={BusinessDetail} />
    </Router>
    
  );
}

export default App;
