import React from "react";
import { Link } from "react-router-dom";
import { EyeOff } from "lucide-react";
import UnderlineInput from "../../components/Reusable/UnderlineInput";
import PrimaryButton from "../../components/Reusable/PrimaryButton";
import AuthCard from "../../components/Auth/AuthCard";

export default function ResetPassword() {
  return (
    <AuthCard cardClassName="md:h-[420px]">
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 font-ubuntu">Welcome to Infliuence</h3>
          <p className="text-gray-400 text-[10px] sm:text-xs font-medium mt-0.5 font-ubuntu">Reset Password</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <UnderlineInput label="New Password" type="password" placeholder="Enter Your New Password" icon={EyeOff} />
          <UnderlineInput label="Confirm New Password" type="password" placeholder="Confirm Your New Password" icon={EyeOff} />

          <Link to="/login" className="block w-full">
            <PrimaryButton className="rounded font-comfortaa">Save Password</PrimaryButton>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-[10px] sm:text-xs md:text-xs font-quicksand">
          Already have account ?{" "}
          <Link to="/login" className="text-[#F5A623] hover:underline font-medium font-quicksand">
            Login here
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
