import React , {useState , useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialAuthBtn from "./SocialAuthBtn";
import Input from "../../common/components/Input";
import {loginRule,validateForm} from './loginFormData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SocialBtnSpan = styled.span`
  font-size: 1rem;
`;

const Login = (props) => {

  const [loading,setLoading] = useState(false);
  const [loginData,setLoginData] = useState(loginRule); 

  
  const submitLogin =(event)=>{
    
    event.preventDefault();

    
    if(!validateForm([loginData.username,loginData.password],loginData,setLoginData)) return;
    setLoading(true);

    //Faking API call here
    setTimeout(() => {

      setLoading(false);
    }, 500);

  }

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
                          name={"password"}
                          dataForm={loginData}
                          setDataForm={setLoginData}
                          errorStatus={loginData.password.error.status}
                          errorMessage={loginData.password.error.message}
                        ></Input>
                      </div>
                      <div className="mt-5">
                      {!loading  && (<button
                          className="button is-block is-fullwidth is-warning is-rounded kanit-font"
                          type="submit"
                          onClick={submitLogin}
                        >
                          เข้าสู่ระบบ  

                        </button>)}

                        {loading && (<button
                          className="button is-block is-fullwidth is-warning is-rounded kanit-font"
                          type="submit"
                          disabled
                          style={{opacity:"0.8"}}
                        >
                         <FontAwesomeIcon icon={faSpinner}  className="pr-2" size="lg"   />
                          กำลังเข้าสู่ระบบ...
                        </button>)}
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
