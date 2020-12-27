import React from "react";
import mainImage from "../../common/img/main.png";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const MainTop = (props) => {
  return (
    <section>
      <div class="columns is-centered">
        <div class="column is-half">
          <img src={mainImage}></img>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column  has-text-centered-desktop has-text-centered-tablet has-text-left-mobile">
            <h1 className="title is-3">สร้างเเบบสำรวจของคุณง่ายๆเเค่ปลายนิ้ว</h1>
            <h4 className="subtitle is-4">เเบบสำรวจของคุณจะไม่จำเจอีกต่อไป</h4>
            <div className="buttons  is-centered"> 
                <button className="button is-medium is-hidden-mobile is-warning">
                  <strong>
                    <Link to="/register" className="has-text-black is-block kanit-font">เริ่มต้นใช้งาน</Link>
                  </strong>
                </button>
                <button className="button is-hidden-tablet is-warning">
                  <strong>
                    <Link to="/register" className="has-text-black is-block kanit-font">เริ่มต้นใช้งาน</Link>
                  </strong>
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MainTop;
