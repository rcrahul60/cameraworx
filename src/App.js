import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contact';
import Service from './components/pages/Services';


const useStyles = makeStyles({});

function App() {

  const classes = useStyles();
  return (

    <div className="{classes.container}">
      <Router>
        <Navbar />
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact path="/contact" render={props => <Contact {...props} />} />
          <Route exact path="/services" render={props => <Service {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
