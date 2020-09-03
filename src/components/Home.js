import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ProfPic from "./assets/ProfPic.jpg";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid" scroll>
          <Cell col={12}>
            <img
              className="circular-square"
              src={ProfPic}
              alt="Camrynne Sullivan"
            />
            <div className="banner-text">
              <h1>Full-Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | NodeJS | Express | React |
                MongoDB
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/camrynne-sullivan-8047161aa/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/camrynnesullivan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
