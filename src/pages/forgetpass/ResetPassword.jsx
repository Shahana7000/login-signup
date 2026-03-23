import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "../../components/AuthLayout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardContent } from "../../components/ui/card";
import Logo from "../../components/Logo";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthLayout>
      <Card className="w-full max-w-[480px] p-6 lg:p-10 shadow-2xl">
        <CardContent className="w-full flex flex-col items-center">
          {/* Logo */}
          <Logo />

          <div className="text-center mb-10">
            <h1 className="text-[32px] font-bold text-gray-900 mb-1 font-sans">
              Reset Password
            </h1>
            <p className="text-gray-400 text-base font-medium font-sans">
              Enter your new password below
            </p>
          </div>

          <form className="w-full space-y-8">
            {/* Password Field */}
            <div className="space-y-1 relative">
              <Label className="text-gray-700 font-medium ml-1">New Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="**********"
                  className="border-0 border-b-2 border-gray-100 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-300 transition-all placeholder:text-gray-300 text-gray-900 h-10 pr-8"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-1 relative">
              <Label className="text-gray-700 font-medium ml-1">Confirm Password</Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="**********"
                  className="border-0 border-b-2 border-gray-100 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-300 transition-all placeholder:text-gray-300 text-gray-900 h-10 pr-8"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Reset Button */}
            <Button
              className="w-full h-14 bg-[#F5A623] hover:bg-[#E59512] text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 mt-4"
            >
              Reset Password
            </Button>
          </form>

          {/* Back Link */}
          <div className="mt-10 text-center">
            <Link to="/login" className="text-gray-400 text-sm font-medium hover:text-[#F5A623] transition-colors">
              Back to Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
