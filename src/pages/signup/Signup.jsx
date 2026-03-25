import React from 'react';
import { Mail, User, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import UnderlineInput from '../../components/Reusable/UnderlineInput'
import PrimaryButton from '../../components/Reusable/PrimaryButton';
import AuthCard from '../../components/Auth/AuthCard';
import GoogleImg from '../../assets/google.png';
import FacebookImg from '../../assets/facebook.png';

const Signup = () => {
  return (
    <AuthCard>
      <div className="flex flex-col space-y-3 sm:space-y-4">
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 font-ubuntu">Welcome to Infliuence</h3>
          <p className="text-gray-400 text-[10px] sm:text-xs font-medium mt-0.5 font-ubuntu">Signup to your Account</p>
        </div>
        {/* Form */}
        <div className="space-y-2">
          <UnderlineInput label="Name" type="text" placeholder="Enter Name" icon={User} />
          <UnderlineInput label="Email ID" type="email" placeholder="Enter Email Id" icon={Mail} />

          {/* Password */}
          <div>
            <UnderlineInput label="Password" type="password" placeholder="Enter Password" icon={EyeOff} />
            <p className="text-[#4E4E4E] text-left text-[14px] sm:text-[12px] mt-0.5">Must be atleast 8 characters.</p>
          </div>

          {/* Signup Button */}
          <div className="pt-0.5">
            <PrimaryButton className="rounded font-comfortaa py-2 sm:py-2.5">Signup</PrimaryButton>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">

            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white text-[8px] sm:text-[10px] font-bold font-comfortaa h-8 sm:h-9 rounded hover:bg-gray-900 transition-colors"
            >
              <img src={GoogleImg} alt="Google" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Signup with Google</span>
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white text-[8px] sm:text-[10px] font-bold font-comfortaa h-8 sm:h-9 rounded hover:bg-gray-900 transition-colors"
            >
              <img src={FacebookImg} alt="Facebook" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Signup with Facebook</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-[10px] sm:text-xs md:text-xs m-2! pb-2 font-quicksand font-normal">
          Already have account ?{' '}
          <Link to="/" className="text-[#F5A623] hover:underline font-medium font-quicksand">
            Login here
          </Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default Signup;