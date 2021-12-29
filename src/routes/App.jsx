import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../pages/login";
import RecoveryPassword from "../pages/RecoveryPassword";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import "../styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/recovery-password" element={<RecoveryPassword/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;