import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SocialAuthBtn from "../../common/components/SocialBtn";
import Input from "../../common/components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { authUserPasswordLogin, validateForm, authUserToken } from "./service";
import { useHistory } from "react-router-dom";
import authenProvider from "../../authentication";
import actionType from "../../authentication/actionType";
import { useDispatch } from "react-redux";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    username: {
      name: "username",
      value: "",
      validator: {
        minLength: 0,
        maxLength: 100,
        required: true,
        // isEmail:true
      },
      error: {
        status: false,
        message: "",
      },
    },
    password: {
      name: "password",
      value: "",
      validator: {
        minLength: 0,
        maxLength: 100,
        required: true,
      },
      error: {
        status: false,
        message: "",
      },
    },
  });
  const [loginResult, setLoginResult] = useState(false);
  const [openError, setOpenError] = useState({
    errorMessage: "",
    isOpen: false,
  });

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(async () => {
    let params = new URLSearchParams(props.location.search);
    let token = params.get("t");
    console.log('ddd');
    if (token) {

      const authenUser = await authUserToken(token);

      authenProvider.login({
        accessToken: token,
        refreshToken: "55555",
      });

      dispatch({
        type: actionType.SET_USER_LOGIN,
        payload: {
          userInfo: authenUser.data.data,
        },
      });

      history.push("/dashboard");
    }
  }, []);

  const submitLogin = async (event) => {
    event.preventDefault();

    if (
      !validateForm(
        [loginData.username, loginData.password],
        loginData,
        setLoginData
      )
    )
      return;
    setLoading(true);

    const login = await authUserPasswordLogin(
      loginData.username.value,
      loginData.password.value
    );

    if (login.status == 200 || login.data.status) {
      const authenUser = await authUserToken(login.data.data.accessToken);

      authenProvider.login({
        accessToken: login.data.data.accessToken,
        refreshToken: login.data.data.refreshToken,
      });

      dispatch({
        type: actionType.SET_USER_LOGIN,
        payload: {
          userInfo: authenUser.data.data,
        },
      });

      history.push("/dashboard");
    } else {
      loginData.password.value = "";
      setLoginData({ ...loginData });
      setOpenError({
        errorMessage: "* อีเมล หรือ รหัสผ่านไม่ถูกต้อง",
        isOpen: true,
      });
      setLoading(false);
    }
  };

  return (
    <div className="hero-head mt-5">
      <br></br>
      <div className="container hero">
        <div className="columns is-centered">
          <div className="column  is-5  ">
            <div className="card">
              <div className="card-content">
                <div class="content">
                  <h1 className="title is-4 has-text-centered">เข้าสู่ระบบ</h1>
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
                    {openError.isOpen && (
                      <p className="subtitle is-6 has-text-danger has-text-centered mb-1 ml-4 is-italic">
                        {openError.errorMessage}
                      </p>
                    )}
                    <div className="mt-5">
                      {!loading && (
                        <button
                          className="button is-block is-fullwidth is-warning is-rounded kanit-font"
                          type="submit"
                          onClick={submitLogin}
                        >
                          เข้าสู่ระบบ
                        </button>
                      )}

                      {loading && (
                        <button
                          className="button is-block is-fullwidth is-warning is-rounded kanit-font"
                          type="submit"
                          disabled
                          style={{ opacity: "0.8" }}
                        >
                          <FontAwesomeIcon
                            icon={faSpinner}
                            className="pr-2"
                            size="lg"
                          />
                          กำลังเข้าสู่ระบบ...
                        </button>
                      )}
                    </div>
                    <hr className="login-hr"></hr>
                    <SocialAuthBtn
                      channel={"facebook"}
                      label={"เข้าสู่ระบบผ่าน Facebook"}
                      url={"http://localhost:4000/api/external-auth/facebook"}
                    ></SocialAuthBtn>
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
  );
}

export default Login;
