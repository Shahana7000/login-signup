import React from 'react';
import { Mail, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import UnderlineInput from '../../components/Reusable/UnderlineInput'
import PrimaryButton from '../../components/Reusable/PrimaryButton';
import RecaptchaLogo from "../../assets/RecaptchaLogo.png"

const Login = () => {

  return (
    <>
      {/* Heading */}
      <div className="text-center mb-4 sm:mb-5">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Welcome to Infliuence</h3>
        <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Login to your Account</p>
      </div>

      {/* Form */}
      <div className="space-y-3 sm:space-y-4">
        {/* Email */}
        <UnderlineInput
          label="Email ID"
          type="email"
          placeholder="Enter Your Email Address"
          icon={Mail}
        />

        {/* Password — same UnderlineInput as Email */}
        <div>
          <UnderlineInput label="Password" type="password" icon={EyeOff} placeholder="Enter Your Password" />
          <div className="flex justify-end -mt-1">
            <Link
              to="/forget-password"
              className="text-gray-400 text-[10px] sm:text-xs hover:text-[#F5A623] transition-colors"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* reCAPTCHA placeholder */}
        <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 rounded-sm bg-white" />
            <span className="text-xs sm:text-sm text-gray-600 font-medium">I'm not a robot</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 h-10 w-7">
            <img src={RecaptchaLogo} alt="reCAPTCHA" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
            <span className="text-[6px] sm:text-[8px] text-gray-400 font-bold">reCAPTCHA</span>
            <span className="text-[5px] sm:text-[7px] text-gray-300">Privacy · Terms</span>
          </div>
        </div>

        {/* Login Button */}
        <PrimaryButton className="rounded-sm">Login</PrimaryButton>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-400 text-[10px] sm:text-xs md:text-sm mt-3 sm:mt-4">
        Not registered yet?{' '}
        <Link to="/signup" className="text-[#F5A623] hover:underline font-medium">
          Signup here
        </Link>
      </p>
    </>
  );
};

export default Login;