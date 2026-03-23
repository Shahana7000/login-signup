import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/ui/input"
import PrimaryButton from "../../components/Reusable/PrimaryButton";

export default function OtpVerification() {
  return (
    <>
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1c1e]">Check Your Email</h3>
        <p className="text-gray-400 text-xs sm:text-sm font-medium mt-2 leading-relaxed px-2">
          Please enter the four digit Verification Code we sent to Example@gamil.com
        </p>
      </div>

      {/* OTP Circles */}
      <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5">
        {[1, 2, 3, 4].map((i) => (
          <Input
            key={i}
            type="text"
            maxLength={1}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-gray-300 text-center text-lg sm:text-xl font-semibold focus-visible:ring-0 focus-visible:border-[#F5A623] bg-transparent shadow-none transition-colors"
          />
        ))}
      </div>

      {/* Resend Section */}
      <div className="text-center mb-4 sm:mb-5 space-y-1">
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
          Didn't Receive Code? <span className="font-bold text-gray-800 cursor-pointer hover:underline">Resend Code</span>
        </p>
        <p className="text-[10px] sm:text-xs text-gray-400">
          Resend Code in ? <span className="font-semibold">00:59</span>
        </p>
      </div>

      {/* Confirm Button */}
      <Link to="/reset-password" className="block w-full">
        <PrimaryButton className="rounded-sm">Comfirm</PrimaryButton>
      </Link>
    </>
  );
}
