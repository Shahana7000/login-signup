import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import Logo from "../../components/Logo";

export default function OtpVerification() {
  return (
    <AuthLayout>
      <Card className="w-full max-w-[480px] p-6 lg:p-10 shadow-2xl">
        <CardContent className="w-full flex flex-col items-center">
          {/* Logo */}
          <Logo />

          <div className="text-center mb-10">
            <h2 className="text-[32px] font-bold text-[#1a1c1e] tracking-tight font-sans mb-1">
              OTP Verification
            </h2>
            <p className="text-gray-400 text-base font-medium font-sans">
              Enter the 4-digit code sent to your email
            </p>
          </div>

          <form className="w-full space-y-10">
            <div className="flex justify-center gap-3">
              {[1, 2, 3, 4].map((i) => (
                <Input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-100 rounded-full focus:border-[#F5A623] focus:ring-0 transition-all text-gray-900"
                />
              ))}
            </div>

            <Button className="w-full h-14 bg-[#F5A623] hover:bg-[#E59512] text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300">
              Verify OTP
            </Button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm font-medium">
              Didn't receive code?{" "}
              <button className="text-[#F5A623] font-semibold hover:underline">
                Resend OTP
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
