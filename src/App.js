import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import About from './components/pages/About';


const useStyles = makeStyles({});

function App() {

  const classes = useStyles();
  return (

    <div className="{classes.container}">
      <Router>
        <Navbar />
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact from="/about" render={props => <About {...props} />} />
          <Route exact path="/contact" render={props => <Contact {...props} />} />
          <Route exact path="/services" render={props => <Services {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
