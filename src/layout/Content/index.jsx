import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";
import PrivateRoute from "../PrivateRoute";
const loading = <h1></h1>;

function ContentSection(props) {

  return (
    <div className="hero bg-style is-fullheight">
      <Suspense fallback={loading}>
          <PrivateRoute></PrivateRoute>
      </Suspense>
    </div>
  );
}

export default ContentSection;
