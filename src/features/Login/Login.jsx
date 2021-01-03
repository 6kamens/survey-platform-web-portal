import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import styled from "styled-components";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import mainImage from "../../common/img/main.png";

const ImageLogin = styled.img`
    width:100%;
    height:60px
`;

const SocialBtnSpan = styled.span`
    font-size:1rem;
`;

const Login = (props) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <section className="container hero">
          <div className="columns is-centered">
            <div className="column  is-5  has-text-centered">
              <div className="card">
                <div className="card-image mt-5">
                  <ImageLogin src={'https://as2.ftcdn.net/jpg/02/78/89/71/500_F_278897153_hqlLBqyGGpVWZlm2aNPSeTqpio1TuteS.jpg'}></ImageLogin>
                </div>
                <div className="card-content">
                  <div class="content">
                    <h1 className="title is-4">เข้าสู่ระบบ</h1>
                    <hr className="login-hr"></hr>
                    <form>
                      <div className="field">
                        <div className="control">
                          <input
                            className="input  is-rounded kanit-font"
                            type="email"
                            placeholder="อีเมล"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input
                            className="input  is-rounded kanit-font"
                            type="password"
                            placeholder="รหัสผ่าน"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <button
                          className="button is-block is-fullwidth is-warning is-rounded kanit-font"
                          type="submit"
                        >
                          เข้าสู่ระบบ
                        </button>
                      </div>
                      <hr className="login-hr"></hr>
                      <div>
                        <FacebookLoginButton
                          align={"center"}
                          onClick={() => alert("Hello")}
                          size={40}
                        >
                          <SocialBtnSpan className="kanit-font" >
                            เข้าสู่ระบบผ่าน Facebook
                          </SocialBtnSpan>
                        </FacebookLoginButton>
                      </div>
                      <div className="mt-5 ">
                        <GoogleLoginButton
                          align={"center"}
                          onClick={() => alert("Hello")}
                          size={40}
                        >
                          <SocialBtnSpan className="kanit-font">
                            เข้าสู่ระบบผ่าน Google
                          </SocialBtnSpan>
                        </GoogleLoginButton>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Login;
