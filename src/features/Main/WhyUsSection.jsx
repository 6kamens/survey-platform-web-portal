import React from "react";
import styled from "styled-components";

const LongSection = styled.section`
  background-color: ${(props) => props.backgroundColor || "#fffefd"};
  padding: 50px;
  margin-top: 50px;
  margin_bottom: 50px;
`;

const WhyUsSection = (props) => {
  return (
    <section className="hero mt-6" style={{ backgroundColor: "#e6dcd3" }}>
      <div className="hero-body">
        <div className="container">
          <div class="columns is-vcentered">
            <div
              className="column"
              style={{ height: "400px", backgroundColor: "red" }}
            ></div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure class="image is-48x48"></figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">John Smith</p>
                    </div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure class="image is-48x48"></figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">John Smith</p>
                    </div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
