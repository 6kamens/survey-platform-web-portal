import React, { useEffect } from "react";
import routes from "../routes";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authenProvider from "../../authentication";
import actionType from "../../authentication/actionType";

function PrivateRoute(props) {
  const dispatch = useDispatch();
  let routeList = routes.guest;
  let isAuthen = authenProvider.isLogin();
  let { isLogin, userInfo } = useSelector((state) => state.login);
  if (isLogin) routeList = routes.member;

  useEffect(() => {
    if (!isAuthen && isLogin) {
      dispatch({
        type: actionType.SET_USER_LOGOUT,
      });
      authenProvider.logout();
    }else if(isAuthen && !isLogin){
      authenProvider.logout();
    }

  }, [isLogin]);

  return (
    <Switch>
      {routeList.routes.map((route, idx) => {
        return (
          route.component && (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={(props) => <route.component {...props} />}
            />
          )
        );
      })}
      <Redirect to={routeList.redirect.path}></Redirect>
    </Switch>
  );
}

export default PrivateRoute;
