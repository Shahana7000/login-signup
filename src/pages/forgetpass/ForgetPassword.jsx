import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';
import Logo from '../../components/Logo';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent } from '../../components/ui/card';

const ForgetPassword = () => {
  return (
    <AuthLayout>
      <Card className="w-full max-w-[480px] p-6 lg:p-10">
        <CardContent className="w-full flex flex-col items-center">
          {/* Logo */}
          <Logo />

          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-[28px] font-bold text-gray-900 mb-2 font-sans">
              Forget Password?
            </h1>
            <p className="text-gray-400 text-base font-sans">
              Enter your email to receive an OTP
            </p>
          </div>

          <form className="w-full space-y-8">
            {/* Email Field */}
            <div className="space-y-1 relative">
              <Label className="text-gray-700 font-medium ml-1">Email ID</Label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-0 border-b-2 border-gray-100 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-300 transition-all placeholder:text-gray-300 text-gray-900 h-10 pr-8"
                />
                <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* SEND OTP Button */}
            <Button
              type="submit"
              className="w-full h-14 bg-[#F5A623] hover:bg-[#E59512] text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 translate-y-2"
            >
              SEND OTP
            </Button>
          </form>

          {/* Back to Login */}
          <div className="mt-10 text-center">
            <Link
              to="/login"
              className="text-gray-400 text-sm font-medium hover:text-[#F5A623] transition-colors"
            >
              Back to Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default ForgetPassword;
