import React from "react";
import { Link } from "react-router-dom";
import { EyeOff } from "lucide-react";
import UnderlineInput from "../../components/Reusable/UnderlineInput"
import PrimaryButton from "../../components/Reusable/PrimaryButton";
import AuthCard from "../../components/Auth/AuthCard";

export default function VerifyAccount() {
  return (
    <AuthCard>
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 font-quicksand">Welcome to Infliuence</h3>
          <p className="text-gray-400 text-[10px] sm:text-xs font-medium mt-0.5 font-quicksand">Verify Account</p>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <UnderlineInput
            label="Email or Phone number"
            placeholder="Enter Your Email or Phone Number"
            icon={EyeOff}
          />

          {/* Resend Section */}
          <div className="text-center space-y-3 font-quicksand">
            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-500 font-medium whitespace-nowrap">
              Didn't Receive Code? <span className="font-bold text-gray-800 cursor-pointer hover:underline">Resend Code</span>
            </p>
            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-400">
              Resend Code in ? <span className="text-gray-800 font-bold">00:59</span>
            </p>
          </div>

          <Link to="/otp-verification" className="block w-full">
            <PrimaryButton className="rounded font-comfortaa py-3.5 sm:py-4">Verify Account</PrimaryButton>
          </Link>
        </div>
      </div>
    </AuthCard>
  );
}
