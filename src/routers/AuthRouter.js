import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScrenn } from "../components/auth/RegisterScrenn";

export const AuthRouter = () => {
  return (
    <>
      <div className="auth__main">
        <div className="auth__box-container">
          <Switch>
            <Route exact path="/auth/login" component={LoginScreen} />
            <Route exact path="/auth/register" component={RegisterScrenn} />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </div>
    </>
  );
};
