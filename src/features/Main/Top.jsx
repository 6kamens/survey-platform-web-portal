import React from "react";
import mainImage from "../../common/img/main.png";
import Typing from "react-typing-animation";

function MainTop(props){
  return (
    <section className="hero-body ">
      <div className="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <img src={mainImage}></img>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column  has-text-centered-desktop has-text-centered-tablet has-text-left-mobile">
            <Typing speed={15}>
              <span>
                <h1 className="title is-3">
                  สร้างเเบบสำรวจของคุณง่ายๆเเค่ปลายนิ้ว
                </h1>
              </span>
            </Typing>

            <h4 className="subtitle is-4 mt-2">เเบบสำรวจของคุณจะไม่จำเจอีกต่อไป</h4>
            <div className="buttons  is-centered">
              <button className="button is-medium is-hidden-mobile is-warning">
                <strong>
                  <a
                    href="/login"
                    className="has-text-black is-block kanit-font"
                  >
                    เริ่มต้นใช้งาน
                  </a>
                </strong>
              </button>
              <button className="button is-hidden-tablet is-warning">
                <strong>
                  <a
                    href="/login"
                    className="has-text-black is-block kanit-font"
                  >
                    เริ่มต้นใช้งาน
                  </a>
                </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTop;
