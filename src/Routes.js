import React from "react";
import { Route, Switch } from "react-router-dom";
import { Customers, Dashboard, Employees, Products } from "./pages";
import HomePage from "./pages/HomePage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/statistics">
                <h2>Statistics</h2>
            </Route>
            <Route exact path="/customers">
                <Customers />
            </Route>
            <Route exact path="/products">
                <Products />
            </Route>
            <Route exact path="/employees">
                <Employees/>
            </Route>
        </Switch>
    );
};

export default Routes;
