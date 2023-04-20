import React from 'react';
import { useState } from "react";
import { BrowserRouter, HashRouter, Router, Routes, Route, Link } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoggedIn] = useState(false);

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Auth">Auth</Link>
                    </li>
                </ul>
            </nav>
            <BrowserRouter>
                <HashRouter>
                    <Router>
                        <Routes>
                            {isLoggedIn ? (
                                <Route path="/" element={<Home />}>
                                    <Home />
                                </Route>
                            ) : (
                                <Route path="/" element={<Auth />}>
                                    <Auth />
                                </Route>
                            )}
                        </Routes>
                    </Router>
                </HashRouter>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;