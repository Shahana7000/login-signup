import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup";
import ForgetPassword from "./pages/forgetpass/ForgetPassword";
import ResetPassword from "./pages/forgetpass/ResetPassword";
import OtpVerification from "./pages/forgetpass/OtpVerification";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
    </Routes>
  );
}

export default App;