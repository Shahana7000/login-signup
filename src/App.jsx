import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout"
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ForgetPassword from "./pages/forgetpass/ForgetPassword";
import ResetPassword from "./pages/forgetpass/ResetPassword";
import OtpVerification from "./pages/forgetpass/OtpVerification";
import VerifyAccount from "./pages/forgetpass/VerifyAccount";

function App() {
  return (
    <Routes>
      {/* 
        LAYOUT ROUTE PATTERN:
        The <Route element={<AuthLayout />}> wraps all nested routes.
        This ensures the shared background, card, and logo from AuthLayout 
        are used everywhere without repeating them in individual pages.
      */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
      </Route>
    </Routes>
  );
}

export default App;