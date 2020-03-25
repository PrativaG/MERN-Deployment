import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import PirateCrew from './views/PirateCrew';
import ShowPirate from './views/ShowPirate';
import AddPirate from './views/AddPirate';
import Login from './views/Login';
function App() {
  return (
    <div className="App">
     
      <Router>
          <Login path="/"/>
          <PirateCrew path="pirates"/>
          <ShowPirate path="pirate/:id"/>
          <AddPirate path="pirate/new"/>
      </Router>
    </div>
  );
}

export default App;
