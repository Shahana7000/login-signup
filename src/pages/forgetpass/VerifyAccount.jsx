import React from "react";
import { Link } from "react-router-dom";
import { EyeOff } from "lucide-react";
import UnderlineInput from "../../components/Reusable/UnderlineInput"
import PrimaryButton from "../../components/Reusable/PrimaryButton";
import AuthCard from "../../components/Auth/AuthCard";

export default function VerifyAccount() {
  return (
    <AuthCard cardClassName="md:h-[440px]">
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 font-quicksand">Welcome to Infliuence</h3>
          <p className="text-gray-400 text-[10px] sm:text-xs font-medium mt-0.5 font-quicksand">Verify Account</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <UnderlineInput
            label="Email or Phone number"
            placeholder="Enter Your Email or Phone Number"
            icon={EyeOff}
          />

          {/* Resend Section */}
          <div className="text-center space-y-2 font-quicksand">
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium font-quicksand">
              Didn't Receive Code? <span className="font-bold text-gray-800 cursor-pointer hover:underline">Resend Code</span>
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400">
              Resend Code in ? <span className="text-gray-800 font-bold">00:59</span>
            </p>
          </div>

          <Link to="/otp-verification" className="block w-full">
            <PrimaryButton className="rounded font-comfortaa">Verify Account</PrimaryButton>
          </Link>
        </div>
      </div>
    </AuthCard>
  );
}
