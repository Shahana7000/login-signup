import React from "react";
import { Link } from "react-router-dom";
import { EyeOff } from "lucide-react";
import UnderlineInput from "../../components/Reusable/UnderlineInput";
import PrimaryButton from "../../components/Reusable/PrimaryButton";

export default function ResetPassword() {
  return (
    <>
      <div className="text-center mb-4 sm:mb-5">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Welcome to Infliuence</h3>
        <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Reset Password</p>
      </div>

      {/* Form */}
      <div className="space-y-3 sm:space-y-4">
        {/* New Password */}
        <UnderlineInput label="New Password" type="password" placeholder="Enter Your New Password" icon={EyeOff} />

        {/* Confirm Password */}
        <div>
          <UnderlineInput label="Comfirm Password" type="password" placeholder="Enter Your Comfirm Password" icon={EyeOff} />
          <p className="text-[10px] sm:text-[11px] text-gray-400 mt-1">Must be atleast 8 characters.</p>
        </div>

        {/* Save Password Button */}
        <Link to="/login" className="block w-full">
          <PrimaryButton className="rounded-sm">Save Password</PrimaryButton>
        </Link>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-400 text-[10px] sm:text-xs md:text-sm mt-4 sm:mt-5">
        Already have account ?{" "}
        <Link to="/login" className="text-[#F5A623] hover:underline font-medium">
          Login here
        </Link>
      </p>
    </>
  );
}
