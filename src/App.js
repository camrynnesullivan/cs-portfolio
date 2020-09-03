import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="CODE NAME: CAM" scroll>
          <Navigation>
            <Link to="/home">HOME</Link>
            <Link to="/aboutme">ABOUT ME</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/contact">CONTACT</Link>
          </Navigation>
        </Header>
        <Drawer title="CODE NAME: CAM">
          <Navigation>
            <Link to="/home">HOME</Link>
            <Link to="/aboutme">ABOUT ME</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/contact">CONTACT</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
