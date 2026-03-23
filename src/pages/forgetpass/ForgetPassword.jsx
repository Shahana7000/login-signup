import React from 'react';
import { EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import UnderlineInput from "../../components/Reusable/UnderlineInput"
import PrimaryButton from '../../components/Reusable/PrimaryButton'

const ForgetPassword = () => {
  return (
    <>
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Welcome to Infliuence</h3>
        <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Forgot Password</p>
      </div>

      {/* Form */}
      <div className="space-y-5 sm:space-y-6">
        <UnderlineInput
          label="Email"
          placeholder="Enter Your Email Address"
          type="email"
          icon={EyeOff}
        />

        <Link to="/verify-account" className="block w-full">
          <PrimaryButton className="rounded-sm">Send Email</PrimaryButton>
        </Link>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-400 text-[10px] sm:text-xs md:text-sm mt-5 sm:mt-8">
        Already have account ?{' '}
        <Link to="/login" className="text-[#F5A623] hover:underline font-medium">
          Login here
        </Link>
      </p>
    </>
  );
};

export default ForgetPassword;
