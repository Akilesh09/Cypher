import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Grid from './Grid';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <div className="App" style={{ 
      backgroundImage: 'url(./images/map1.jpeg)' 
    }}>
      <Navigation />
      {<header className="bg">
      </header> }
     {/* {<div style={{
        // width: '150px',
        // height: '150px',
        backgroundSize: 'cover',
        backgroundImage: 'url(./images/map1.jpeg)'
     }}></div> } */}
    <Grid />
    </div>
  );
}

export default App;
