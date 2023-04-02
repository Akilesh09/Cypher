import React from "react";
import OrgNavigation from "./OrgNavigation";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Grid from "./Grid";

export default function OrgHome() {
    let name = useParams()

    return (
        <div>
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="http://localhost:3000/">International Mini Market</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="color-nav" variant="light">
                    <Nav.Link href="#home">About</Nav.Link>
                </Nav>
                <Nav className="color-nav" variant="light">
                    <Nav.Link href={"http://localhost:3000/loggedIn/manage/"+name}>Manage</Nav.Link>
                </Nav>
                
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="http://localhost:3000/">Logout</Nav.Link>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        <div>
        <div className="App" style={{
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundImage: `url(https://th.bing.com/th/id/R.1a96c23ca7618d4925b03d364ddd3e2d?rik=eu2VjlYyGdAMjw&riu=http%3a%2f%2fwww.pptback.com%2fuploads%2fblue-world-map-backgrounds-powerpoint.jpg&ehk=1AxsbeKTKBElECVOH1dR9fDkAHNEyofn39HEUR83tkU%3d&risl=&pid=ImgRaw&r=0)`,
        '&::before': {
        content: "",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: "rgba(255,255,255,.5)",

        }
      }}></div>
        <Grid></Grid>
        </div>
        </div>
    )
}