import React from "react";
import { Link } from "react-router-dom";
import { EyeOff } from "lucide-react";
import UnderlineInput from "../../components/Reusable/UnderlineInput"
import PrimaryButton from "../../components/Reusable/PrimaryButton";
import AuthCard from "../../components/Auth/AuthCard";

// 
export default function VerifyAccount() {
  return (
    <AuthCard>
      <div className="flex flex-col space-y-3 sm:space-y-4">

        {/* Heading */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black-600 font-quicksand">Welcome to Infliuence</h3>
          <p className="text-gray-400 text-[10px] sm:text-xs font-medium mt-0.5 font-quicksand">Verify Account</p>
        </div>

        {/* Input */}
        <UnderlineInput
          label="Email or Phone number"
          placeholder="Enter Your Email or Phone Number"
          icon={EyeOff}
        />

        {/* Resend Section */}
          <div className="text-center space-y-[3px] font-quicksand pt-2">
            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-[#4E4E4E]-500">
              Didn't Receive Code? <span className="font-bold text-[#4E4E4E]-700 cursor-pointer hover:underline">Resend Code</span>
            </p>
            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-[#4E4E4E]-500">
              Resend Code in ? <span className="font-bold text-[#4E4E4E]-700">00:59</span>
            </p>
          </div>

        {/* Button */}
        <Link to="/otp-verification" className="block w-full">
          <PrimaryButton className="rounded font-comfortaa py-3.5 sm:py-4">Verify Account</PrimaryButton>
        </Link>

      </div>
    </AuthCard>
  );
}