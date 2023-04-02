import logo from './logo.svg';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './Navigation';
import Grid from './Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './images/map1.jpeg'
import OrganizationPage from './OrganizationPage';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        {/* // <div className="App" style={{
        //   width: '100vw',
        //   height: '100vh',
        //   backgroundSize: 'cover',
        //   backgroundImage: `url(https://th.bing.com/th/id/R.1a96c23ca7618d4925b03d364ddd3e2d?rik=eu2VjlYyGdAMjw&riu=http%3a%2f%2fwww.pptback.com%2fuploads%2fblue-world-map-backgrounds-powerpoint.jpg&ehk=1AxsbeKTKBElECVOH1dR9fDkAHNEyofn39HEUR83tkU%3d&risl=&pid=ImgRaw&r=0)`
        // }}>
        //   <Navigation />
        //   <Grid />
        // </div> */}
        <Route path="/organization/:name" Component={OrganizationPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;