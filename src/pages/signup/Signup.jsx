import React from 'react';
import { Mail, User, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import UnderlineInput from '../../components/Reusable/UnderlineInput'
import PrimaryButton from '../../components/Reusable/PrimaryButton';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4" />
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853" />
    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05" />
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335" />
  </svg>
);

const Signup = () => {
  return (
    <>
      {/* Heading */}

      <div className="text-center mb-4 sm:mb-5">
        <h3 className="text-lg sm:text-xl md:text-2xl font- text-gray-900">Welcome to Infliuence</h3>
        <p className="text-gray-400 text-xs sm:text-sm font-semibold mt-1">Signup to your Account</p>
      </div>

      {/* Form */}
      <div className="space-y-3 sm:space-y-4">
        <UnderlineInput label="Name" type="text" placeholder="Enter Name" icon={User} />
        <UnderlineInput label="Email ID" type="email" placeholder="Enter Email Id" icon={Mail} />

        {/* Password — same UnderlineInput as others */}
        <div>
          <UnderlineInput label="Password" type="password" placeholder="Enter Password" icon={EyeOff} />
          <p className="text-gray-400 text-[10px] sm:text-xs -mt-1">Must be atleast 8 characters.</p>
        </div>

        <PrimaryButton className="rounded-sm">Signup</PrimaryButton>

        {/* Social Buttons — stacked on mobile, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2.5 bg-black text-white text-[11px] sm:text-[13px] font-semibold py-2.5 sm:py-3 rounded-md hover:bg-gray-900 transition-colors"
          >
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shrink-0">
              <GoogleIcon />
            </span>
            Signup with Google
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2.5 bg-black text-white text-[11px] sm:text-[13px] font-semibold py-2.5 sm:py-3 rounded-md hover:bg-gray-900 transition-colors"
          >
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1877F2] shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white" />
              </svg>
            </span>
            Signup with Facebook
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-400 text-[10px] sm:text-xs md:text-sm mt-3 sm:mt-4">
        Already have account ?{' '}
        <Link to="/" className="text-[#F5A623] hover:underline font-medium">
          Login here
        </Link>
      </p>
    </>
  );
};

export default Signup;