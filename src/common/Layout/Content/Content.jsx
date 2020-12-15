import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
const loading = <h1>Loading...</h1>;

const ContentSection = (props) => {
  return (
    <div className="bg-style" style={{height:"1000px"}}>   
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
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
          <Redirect from="/" to="/main" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default ContentSection;
