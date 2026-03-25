
import React from 'react';
import { EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import UnderlineInput from "../../components/Reusable/UnderlineInput"
import PrimaryButton from '../../components/Reusable/PrimaryButton'
import AuthCard from "../../components/Auth/AuthCard"

const ForgetPassword = () => {
  return (
    <AuthCard>
      <div className="flex flex-col space-y-2 sm:space-y-3">
        <div className="space-y-4 sm:space-y-6">
          {/* Heading */}
          <div className="text-center">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black-600 font-quicksand">Welcome to Infliuence</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs font-medium mt-0.5 font-quicksand">Forgot Password</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <UnderlineInput
            label="Email"
            placeholder="Enter Your Email Address"
            type="email"
            icon={EyeOff}
          />

          <Link to="/verify-account" className="block w-full">
            <PrimaryButton className="rounded font-comfortaa py-3.5 sm:py-4">Send Email</PrimaryButton>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-[9px] sm:text-[10px] md:text-[11px] mt-1! sm:mt-5 font-quicksand">
          Already have account ?{' '}
          <Link to="/login" className="text-[#F5A623] hover:underline font-medium font-quicksand">
            Login here
          </Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default ForgetPassword;
