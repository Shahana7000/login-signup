import React from 'react';
import { Mail, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import UnderlineInput from '../../components/Reusable/UnderlineInput'
import PrimaryButton from '../../components/Reusable/PrimaryButton';
import AuthCard from '../../components/Auth/AuthCard';

const Login = () => {
  return (
    <AuthCard>
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 font-ubuntu">Welcome to Infliuence</h3>
          <p className="text-gray-400 text-[10px] sm:text-xs font-medium mt-0.5 font-ubuntu">Login to your Account</p>
        </div>

        {/* Form */}
        <div className="space-y-3 sm:space-y-4">
          <UnderlineInput
            label="Email ID"
            type="email"
            placeholder="Enter Your Email Address"
            icon={Mail}
          />

          <div>
            <UnderlineInput 
              label="Password" 
              type="password" 
              icon={EyeOff} 
              placeholder="Enter Your Password" 
            />
            <div className="flex justify-end mt-1.5">
              <Link
                to="/forget-password"
                className="text-gray-400 text-[10px] sm:text-xs hover:text-[#F5A623] transition-colors font-quicksand font-medium"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="pt-1">
            <PrimaryButton className="rounded font-comfortaa">Login</PrimaryButton>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-[10px] sm:text-xs md:text-xs font-quicksand font-normal m-2!">
          Not registered yet?{' '}
          <Link to="/signup" className="text-[#F5A623] hover:underline font-medium font-quicksand">
            Signup here
          </Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default Login;