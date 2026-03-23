import React from "react";
import { Link } from "react-router-dom";
import { Mail, EyeOff } from "lucide-react";
import AuthLayout from "../../components/layout/AuthLayout";
import UnderlineInput from "../../components/UnderlineInput";
import PrimaryButton from "../../components/PrimaryButton";

export default function Login() {
  return (
    <AuthLayout>
      <div className="text-center mb-10">
        <h3 className="text-[22px] font-bold text-[#1a1c1e]">Welcome to Infliuence</h3>
        <p className="text-[13px] text-gray-400 font-medium mt-1">Login to your Account</p>
      </div>

      <div className="space-y-6">
        <UnderlineInput
          label="Email ID"
          placeholder=""
          icon={Mail}
        />
        
        <div className="space-y-2">
          <UnderlineInput
            label="Password"
            type="password"
            placeholder=""
            icon={EyeOff}
          />
          <div className="flex justify-end pt-1">
            <Link to="/reset-password" className="text-[11px] text-gray-500 hover:text-gray-700">
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* reCAPTCHA placeholder */}
        <div className="bg-[#f9f9f9] border border-gray-200 rounded p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded border border-gray-400 bg-white"></div>
            <span className="text-sm font-medium text-gray-800">I'm not a robot</span>
          </div>
          <div className="flex flex-col items-center">
            {/* simple generic recaptcha icon representation */}
            <div className="w-6 h-6 flex flex-col items-center justify-center relative mb-1">
               <div className="absolute inset-0 border-2 border-blue-500 rounded-full border-t-transparent animate-spin" style={{ animationDuration: '3s' }}></div>
               <div className="absolute inset-[4px] border-2 border-blue-500 rounded-full border-b-transparent animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
            </div>
            <span className="text-[7px] text-gray-400 leading-none">reCAPTCHA</span>
            <span className="text-[5px] text-gray-400 leading-none mt-1">Privacy - Terms</span>
          </div>
        </div>

        <div className="pt-2">
          <PrimaryButton className="rounded-none">Login</PrimaryButton>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        Not registered yet?{" "}
        <Link to="/signup" className="text-[#F5A623] hover:underline hover:text-[#e6941a] font-medium">
          Signup here
        </Link>
      </p>
    </AuthLayout>
  );
}
