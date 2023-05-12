import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./screen/Login";
import Register from "./screen/Register";
import Home from "./screen/Home";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path={'home'} element={<Home />} />
        </Routes>
    </BrowserRouter>

);
