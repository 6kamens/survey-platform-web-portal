import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const FooterSection = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="footer-logo"></div>
          </div>
          <div className="column">
            <div className="footer-column">
              <div className="footer-header"></div>
              <ul className="link-list">
                <li>
                  <a href="https://pentos.co/" className="has-text-primary">
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="https://pentos.co/tiktok-monitoring/"
                    className="has-text-primary"
                  >
                    Monitoring
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="footer-column">
              <div className="footer-header">
                <p className="has-text-weight-semibold">Free tools</p>
              </div>
              <ul className="link-list">
                <li>
                  <a
                    href="https://pentos.co/free-tools/tiktok-virality-evaluator/"
                    className="has-text-primary"
                  >
                    Virality Evaluator
                  </a>
                </li>
                <li>
                  <a
                    href="https://pentos.co/free-tools/user-engagement-rate/"
                    className="has-text-primary"
                  >
                    Engagement Rate Calculator
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content container has-text-centered">
            <p>
              Say hello at{" "}
              <a href="mailto:hello@pentos.co" className="has-text-primary">
                hello@pentos.co
              </a>{" "}
              !
            </p>
          </div>
          <div className="has-text-centered has-margin-top-30"></div>

          <div className="cta section"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
