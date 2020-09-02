import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import Main from "./components/Main.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar className="header-color" href="#home">
        Code Name:Cam
        {/* <Navbar.Brand href="#home">Code Name:Cam</Navbar.Brand> */}
        <Nav className="ml-auto">
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          {/* <Link to="/resume">RESUME</Link>
          <Link to="/aboutme">ABOUT ME</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link> */}
        </Nav>
      </Navbar>
      <Main />
    </div>

    // <Main />

    // <div className="demo-big-content">

    //   <Layout>
    //     <Header className="header-color" title="CODE NAME: CAM" >
    //       <Navigation>
    //         <Link to="/resume">RESUME</Link>
    //         <Link to="/aboutme">ABOUT ME</Link>
    //         <Link to="/projects">PROJECTS</Link>
    //         <Link to="/contact">CONTACT</Link>
    //       </Navigation>
    //     </Header>
    //     <Drawer title="CODE NAME: CAM">
    //       <Navigation>
    //         <Link to="/resume">RESUME</Link>
    //         <Link to="/aboutme">ABOUT ME</Link>
    //         <Link to="/projects">PROJECTS</Link>
    //         <Link to="/contact">CONTACT</Link>
    //       </Navigation>
    //     </Drawer>
    //     <Content
    //       <div className="page-content" />
    //       <Main />
    //     </Content>
    //   </Layout>
    // </div>
  );
}

export default App;
