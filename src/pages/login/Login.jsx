import React, { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout';
import Logo from '../../components/Logo';
import RecaptchaLogo from '../../assets/RecaptchaLogo 1.png';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent } from '../../components/ui/card';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <Card className="w-full max-w-[480px] p-6 lg:p-10 shadow-2xl">
        <CardContent className="w-full flex flex-col items-center">
          {/* Logo */}
          <Logo />

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-[32px] font-bold text-gray-900 mb-1 font-sans">
              Welcome to Infliuence
            </h1>
            <p className="text-gray-400 text-base font-medium font-sans">
              Login to your Account
            </p>
          </div>

          <form className="w-full space-y-6">
            {/* Email Field */}
            <div className="space-y-1 relative">
              <Label className="text-gray-700 font-medium ml-1">Email ID</Label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  className="border-0 border-b-2 border-gray-100 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-300 transition-all placeholder:text-gray-300 text-gray-900 h-10 pr-8"
                />
                <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1 relative">
              <Label className="text-gray-700 font-medium ml-1">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="**********"
                  className="border-0 border-b-2 border-gray-100 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gray-300 transition-all placeholder:text-gray-300 text-gray-900 h-10 pr-8 text-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <Link to="/forget-password" title="Forget Password?" className="text-gray-400 text-xs font-medium hover:text-[#F5A623] transition-colors">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* reCAPTCHA Placeholder */}
            <div className="flex items-center justify-between bg-gray-50/50 p-4 rounded-xl border border-gray-100 w-full mb-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 border-2 border-gray-300 rounded-sm bg-white cursor-pointer hover:border-[#4285F4] transition-colors"></div>
                <span className="text-sm text-gray-700 font-medium">I'm not a robot</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={RecaptchaLogo} alt="reCAPTCHA" className="w-7 h-7" />
                <span className="text-[8px] text-gray-400 font-bold">reCAPTCHA</span>
                <div className="flex gap-1 text-[7px] text-gray-400 mt-0.5">
                  <span>Privacy</span>
                  <span>•</span>
                  <span>Terms</span>
                </div>
              </div>
            </div>

            {/* Login Button */}
            <Button
              className="w-full h-14 bg-[#F5A623] hover:bg-[#E59512] text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300"
            >
              Login
            </Button>
          </form>

          {/* Signup Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm font-medium">
              Not registered yet?{' '}
              <Link to="/signup" className="text-[#F5A623] hover:underline transition-all">
                Signup here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default Login;
