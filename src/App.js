import React from "react";
import Home from "./component/home/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
/* import './App.css'; */

function App() {
  
  return (
    <>
       <Router>
          <Switch>
            <Route path="/home" exact component={Home} />
          </Switch>
        </Router>
    </>
  );
}

export default App;
