import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Grid from './Grid';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <header className="App-header">
      </header> */}
     {/* <div style={{
        width: '150px',
        height: '150px',
        backgroundSize: 'cover',
        backgroundImage: 'url(./images/map.png)'
     }}></div> */}
      <Grid />

    </div>
  );
}

export default App;
