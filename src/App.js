import React from 'react';

import './App.css';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import DataPage from "./components/DataPage";



import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";




function App() {
  return (
      <div className="App">
        <Router>
          <Nav/>
          <Route exact path={"/"} component={Wrapper}/>
            <Route path={"/dataPage/:id"} component={DataPage}/>
        </Router>
      </div>
  );
}


export default App;
