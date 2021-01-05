import React from "react";
import styled from "styled-components";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { Link } from "react-router-dom";
import SocialAuthBtn from "./SocialAuthBtn";
import Input from "./Input";

const SocialBtnSpan = styled.span`
  font-size: 1rem;
`;

const Register = (props) => {
  return (
    <section>
      <div className="hero-head mt-5">
        <br></br>
        <div className="container hero">
          <div className="columns is-centered">
            <div className="column  is-5  ">
              <div className="card">
                <div className="card-content">
                  <div class="content">
                    <h1 className="title is-4 has-text-centered">
                      สมัครสมาชิก
                    </h1>
                    <hr className="login-hr"></hr>
                    <form>
                      <div className="field is-horizontal">
                        <div className="field-body">
                          <div className="field">
                            <Input
                              label={"ชื่อ"}
                              type={"text"}
                              require={true}
                              length={0}
                            ></Input>
                          </div>
                          <div className="field">
                            <Input
                              label={"นามสกุล"}
                              type={"text"}
                              require={true}
                              length={0}
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="field ">
                        <Input
                          label={"อีเมล"}
                          type={"text"}
                          require={true}
                          length={0}
                        ></Input>
                      </div>
                      <div className="field ">
                        <Input
                          label={"รหัสผ่าน"}
                          type={"password"}
                          require={true}
                          length={6}
                        ></Input>
                      </div>
                      <div className="mt-5">
                        <button
                          className="button is-block is-fullwidth is-warning is-rounded kanit-font"
                          type="submit"
                        >
                          สมัครสมาชิก
                        </button>
                      </div>
                      <hr className="login-hr"></hr>
                      <SocialAuthBtn
                        channel={"facebook"}
                        label={"สมัครสมาชิกผ่าน Facebook"}
                      ></SocialAuthBtn>
                      <div className="mt-5 ">
                        <SocialAuthBtn
                          channel={"google"}
                          label={"สมัครสมาชิกผ่าน Google"}
                        ></SocialAuthBtn>
                      </div>
                    </form>
                  </div>
                  <h5 class="subtitle is-6 has-text-centered">
                    เป็นสมาชิกเเล้ว ? <Link to="/login">เข้าสู่ระบบ</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
