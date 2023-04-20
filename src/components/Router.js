import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <h1>Home</h1>
                </Route>
                <Route path="/about">
                    <h1>About</h1>
                </Route>
                <Route path="/contact">
                    <h1>Contact</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;