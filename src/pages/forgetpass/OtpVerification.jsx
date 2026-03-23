import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import PrimaryButton from "../components/PrimaryButton";
import { Input } from "../components/ui/input";

export default function OtpVerification() {
  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-[26px] font-bold text-[#1a1c1e] tracking-tight">Check Your Email</h1>
        <p className="text-sm text-gray-400 font-medium mt-4 leading-relaxed max-w-[280px] mx-auto">
          Please enter the four digit Verification Code we sent to <span className="text-black">Example@gmail.com</span>
        </p>
      </div>

      <div className="space-y-8 mt-10">
        <div className="flex justify-center gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Input
              key={i}
              className="w-14 h-14 rounded-full border-gray-300 text-center text-xl font-semibold focus-visible:ring-0 focus-visible:border-[#F5A623]"
              maxLength={1}
            />
          ))}
        </div>
        
        <div className="text-center pt-2">
           <p className="text-xs text-gray-500 font-medium tracking-wide">
             Didn't Receive Code? <span className="font-bold text-gray-800 cursor-pointer hover:underline">Resend Code</span>
           </p>
           <p className="text-[11px] text-gray-400 mt-2">
             Resend Code in ? <span className="font-medium">00:59</span>
           </p>
        </div>

        <div className="pt-4 pb-2">
          {/* Navigate back to Login after confirmation */}
          <Link to="/" className="block w-full">
            <PrimaryButton>Comfirm</PrimaryButton>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
