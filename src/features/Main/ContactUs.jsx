import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
const Icon = styled.div`
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const ContactUs = (props) => {
  return (
    <section className="hero  is-primary is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h4 className="title is-4">ติดต่อสอบถามเพิ่มเติม</h4>
          <div className="columns is-centered is-mobile">
            <Icon className="column is-one-fifth-desktop">
              <a
                href={
                  "https://www.facebook.com/%E0%B9%81%E0%B8%8A%E0%B8%97-CEO-101644625079104"
                }
                target="_blank"
                style={{ style: "pointer-events: none", color: "white" }}
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <p class="subtitle is-5 pl-3">Survey Jump</p>
              </a>
            </Icon>

            <Icon className="column is-one-fifth-desktop">
              <a
                href={
                  "tel:+0875006783"
                }
                style={{ style: "pointer-events: none", color: "white" }}
              >
                <FontAwesomeIcon icon={faPhone} size="2x" />
                <p class="subtitle is-5 pl-3">087-500-6783</p>
              </a>
            </Icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
