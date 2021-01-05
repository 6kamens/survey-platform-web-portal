import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const SocialBtnSpan = styled.span`
  font-size: 1rem;
`;

const SocialAuthBtn = (props) => {
  return (
    <div>
      {props.channel == "google" && (
        <GoogleLoginButton
          align={"center"}
          onClick={() => alert("Hello")}
          size={40}
        >
          <SocialBtnSpan className="kanit-font">{props.label}</SocialBtnSpan>
        </GoogleLoginButton>
      )}
      {props.channel == "facebook" && (
        <FacebookLoginButton
          align={"center"}
          onClick={() => alert("Hello")}
          size={40}
        >
          <SocialBtnSpan className="kanit-font">{props.label}</SocialBtnSpan>
        </FacebookLoginButton>
      )}
    </div>
  );
};

export default SocialAuthBtn;
