import React , {useState} from "react";
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

const Login = (props) => {
  const [loginData,setLoginData] = useState({
    username:{
      value:'',
      validator:{
        minLength:5,
        maxLength:5,
        required:true
      },
      error:{
        status:false,
        message:''
      }
    },
    password:{
      value:'',
      validator:{
        minLength:5,
        maxLength:5,
        required:true
      },
      error:{
        status:false,
        message: ''
      }
    }
  }); 

 

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
                      เข้าสู่ระบบ
                    </h1>
                    <hr className="login-hr"></hr>
                    <form>
                      <div className="field">
                        <Input
                          label={"อีเมล"}
                          type={"text"}
                          name={"username"}
                          dataForm={loginData}
                          setDataForm={setLoginData}
                          errorStatus={loginData.username.error.status}
                          errorMessage={loginData.username.error.message}
                        ></Input>
                      </div>
                      <div className="field">
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
                          เข้าสู่ระบบ
                        </button>
                      </div>
                      <hr className="login-hr"></hr>
                      <SocialAuthBtn
                        channel={"facebook"}
                        label={"เข้าสู่ระบบผ่าน Facebook"}
                      ></SocialAuthBtn>
                      <div className="mt-5 ">
                        <SocialAuthBtn
                          channel={"google"}
                          label={"เข้าสู่ระบบผ่าน Google"}
                        ></SocialAuthBtn>
                      </div>
                    </form>
                  </div>
                  <h5 class="subtitle is-6 has-text-centered">
                    ยังไม่ได้เป็นสมาชิก ?{" "}
                    <Link to="/register">คลิกเพื่อสมัคร</Link>
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

export default Login;
