import React from "react";
import { Link } from "react-router-dom";
import { EyeOff } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import UnderlineInput from "../components/UnderlineInput";
import PrimaryButton from "../components/PrimaryButton";

export default function ResetPassword() {
  return (
    <AuthLayout>
      <div className="text-center mb-10">
        <h1 className="text-[22px] font-bold text-[#1a1c1e]">Welcome to Infliuence</h1>
        <p className="text-[13px] text-gray-400 font-medium mt-1">Reset Password</p>
      </div>

      <div className="space-y-6">
        <UnderlineInput
          label="New Password"
          type="password"
          placeholder="Enter Your New Password"
          icon={EyeOff}
        />
        
        <div className="space-y-2">
          <UnderlineInput
            label="Comfirm Password"
            type="password"
            placeholder="Enter Your Comfirm Password"
            icon={EyeOff}
          />
          <p className="text-[10px] text-gray-400 pt-1 tracking-wide">Must be atleast 8 characters.</p>
        </div>

        <div className="pt-2">
          {/* Navigate to OTP verification instead of submit logic */}
          <Link to="/otp-verification" className="block w-full">
            <PrimaryButton>Save Password</PrimaryButton>
          </Link>
        </div>
      </div>

      <p className="text-center text-[11px] text-gray-500 mt-8 tracking-wide">
        Already have account ?{" "}
        <Link to="/" className="text-[#F5A623] hover:underline hover:text-[#e6941a] font-medium">
          Login here
        </Link>
      </p>
    </AuthLayout>
  );
}
