import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import ProfPic from "./assets/ProfPic.jpg";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid" scroll>
          <Cell col={12}>
            <img
              className="circular-square"
              src={ProfPic}
              alt="image of Camrynne Sullivan"
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
            <div>
              <div>
                <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background:
                        "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
                    }}
                  >
                    Welcome
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                    <Button colored>Get Started</Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
