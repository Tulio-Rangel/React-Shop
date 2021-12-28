import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/login";
import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Layout>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/recovery-password" element={<RecoveryPassword/>}/>
                    <Route element={<Not Found/>}/>
                </Layout>
            </Routes>
        </BrowserRouter>
    );
};

export default App;