import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Customers, Dashboard, Employees, LoginPage, Products } from "./pages";
import HomePage from "./pages/HomePage";






const Routes = () => {
    const [user, setUser] = useState(null)

    const LoginUser = () => {
    
        if(!user){
            return (< LoginPage />)
        }


    }
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

            <Route exact path="/login">
                <LoginPage/>
            </Route>
        </Switch>
    );
};

export default Routes;
