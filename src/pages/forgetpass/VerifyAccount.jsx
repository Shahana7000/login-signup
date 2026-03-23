import React from "react";
import { Link } from "react-router-dom";
import { EyeOff } from "lucide-react";
import UnderlineInput from "../../components/Reusable/UnderlineInput"
import PrimaryButton from "../../components/Reusable/PrimaryButton";

export default function VerifyAccount() {
  return (
    <>
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Welcome to Infliuence</h3>
        <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Verify Account</p>
      </div>

      {/* Form */}
      <div className="space-y-4 sm:space-y-5">
        <UnderlineInput
          label="Email or Phone number"
          placeholder="Enter Your Email or Phone Number"
          icon={EyeOff}
        />

        {/* Resend Section */}
        <div className="text-center space-y-1">
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
            Didn't Receive Code? <span className="font-bold text-gray-800 cursor-pointer hover:underline">Resend Code</span>
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400">
            Resend Code in ? <span className="font-semibold">00:59</span>
          </p>
        </div>

        <Link to="/otp-verification" className="block w-full">
          <PrimaryButton className="rounded-sm">Verify Account</PrimaryButton>
        </Link>
      </div>
    </>
  );
}
