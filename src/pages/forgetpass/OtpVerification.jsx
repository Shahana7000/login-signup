import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/ui/input"
import PrimaryButton from "../../components/Reusable/PrimaryButton";
import AuthCard from "../../components/Auth/AuthCard";
import { useState } from "react";

export default function OtpVerification() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto move to next input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // move back on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <AuthCard>
      <div className="flex flex-col space-y-2 sm:space-y-3">
        <div className="space-y-4 sm:space-y-6">
          <div className="text-center">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black-600 font-quicksand">Check Your Email</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs font-medium mt-0.5 leading-relaxed px-2 font-quicksand">
              Please enter the four digit Verification Code we sent to Example@gamil.com
            </p>
          </div>

          {/* OTP Circles */}
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-5">
            {[0, 1, 2, 3].map((i) => (
              <Input
                key={i}
                type="text"
                maxLength={1}
                value={otp[i]}
                ref={(el) => (inputRefs.current[i] = el)}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full focus:bg-white border-2 text-center text-sm sm:text-base font-semibold focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-2 focus-visible:border-[#F5A623] shadow-none transition-colors outline-none
                  ${otp[i] ? 'bg-white border-[#F5A623]' : 'bg-gray-200'}`}
              />
            ))}
          </div>

          {/* Resend Section */}
          <div className="text-center space-y-[1px] font-quicksand pt-2 mb-2!">
            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-[#4E4E4E]-500">
              Didn't Receive Code? <span className="font-bold text-[#4E4E4E]-700 cursor-pointer hover:underline">Resend Code</span>
            </p>
            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-[#4E4E4E]-500">
              Resend Code in ? <span className="font-bold text-[#4E4E4E]-700">00:59</span>
            </p>
          </div>

          {/* Confirm Button */}
          <div className="mt-5 sm:mt-6">
            <Link to="/reset-password" className="block w-full">
              <PrimaryButton className="rounded font-comfortaa py-3.5 sm:py-4">Confirm</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </AuthCard>
  );
}