import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Eye, EyeOff } from "lucide-react";
import AuthLayout from "../../components/AuthLayout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardContent } from "../../components/ui/card";
import Logo from "../../components/Logo";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <Card className="w-full max-w-[480px] p-6 lg:p-10 shadow-2xl">
        <CardContent className="w-full flex flex-col items-center">
          {/* Logo */}
          <Logo />

          <div className="text-center mb-8">
            <h1 className="text-[32px] font-bold text-gray-900 mb-1 font-sans">
              Create Account
            </h1>
            <p className="text-gray-400 text-base font-medium font-sans">
              Register to get started
            </p>
          </div>

          <form className="w-full space-y-6">
            {/* Full Name Field */}
            <div className="space-y-1 relative">
              <Label className="text-gray-700 font-medium ml-1">Full Name</Label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="border-0 border-b-2 border-gray-100 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-300 transition-all placeholder:text-gray-300 text-gray-900 h-10 pr-8"
                />
                <User className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1 relative">
              <Label className="text-gray-700 font-medium ml-1">Email ID</Label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  className="border-0 border-b-2 border-gray-100 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-300 transition-all placeholder:text-gray-300 text-gray-900 h-10 pr-8"
                />
                <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1 relative">
              <Label className="text-gray-700 font-medium ml-1">Password</Label>
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

            {/* Signup Button */}
            <Button
              className="w-full h-14 bg-[#F5A623] hover:bg-[#E59512] text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 mt-4"
            >
              Sign Up
            </Button>
          </form>

          {/* Social Sign Up Section */}
          <div className="w-full mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-gray-100 w-full absolute"></div>
              <span className="bg-white px-4 text-gray-400 text-xs font-medium relative italic">Or Sign Up With</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 border-gray-100 hover:bg-gray-50 flex items-center gap-2 text-gray-600 font-semibold rounded-xl">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                Google
              </Button>
              <Button variant="outline" className="h-12 border-gray-100 hover:bg-gray-50 flex items-center gap-2 text-gray-600 font-semibold rounded-xl">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-4 h-4" />
                Facebook
              </Button>
            </div>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm font-medium">
              Already have an account?{' '}
              <Link to="/login" className="text-[#F5A623] hover:underline transition-all font-bold">
                Login here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
