import { UnfoldLessTwoTone } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAccessToken } from "../../storage/accessToken";
import actionType from "../../features/Login/actionType";

const Button = styled.button`
  width: 8rem;
`;

function UserButton(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  
  // useEffect(()=>{
  //    document.addEventListener("mousedown", ()=>setOpenMenu(false));

  //    return ()=>  document.removeEventListener("mousedown", ()=>setOpenMenu(false));
  // },[openMenu]);

  const signOut =()=>{
    console.log('out');
    removeAccessToken();
    dispatch({type:actionType.SET_USER_LOGOUT});
  }

  return (
    <div className={openMenu ? "dropdown is-active" : "dropdown"}>
      <div className="dropdown-trigger">
        <Button
          className="button is-warning kanit-font has-text-black"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span>{props.name}</span>
        </Button>
      </div>
      <div className="dropdown-menu has-text-centered">
        <div className="dropdown-content ">
          <Link to={'/dashboard'} className="dropdown-item">
            เเดชบอร์ด
          </Link>
          <hr className="dropdown-divider"></hr>
          <a className="dropdown-item" onClick={signOut}>ออกจากระบบ</a>
        </div>
      </div>
    </div>
  );
}

export default UserButton;
