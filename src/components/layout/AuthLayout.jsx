import React from "react";
import Logo from "../Logo";

export function AuthLayout({ children }) {
  // Using inline style for bgImage as requested, so the user can easily swap src/assets/bg.png
  // Even if the file doesn't exist yet, it won't break the build; just renders white or transparent bg.
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-[#fdfaf2] relative"
      style={{
        backgroundImage: 'url("/src/assets/bg.png")',
      }}
    >
      {/* Decorative concentric rings on backgrounds (fallback if image not present) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] pt-[60%] border border-[#f5ecce] rounded-full opacity-60"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[50%] pt-[50%] border border-[#e6d9b2] rounded-full opacity-60"></div>
        <div className="absolute top-[10%] -right-[10%] w-[40%] pt-[40%] border border-[#dbd2b3] rounded-full opacity-60"></div>
      </div>

      <div className="max-w-md w-full mx-auto relative z-10 p-4 sm:p-0">
        <div className="bg-white rounded-2xl shadow-xl w-full p-8 sm:p-10">
          <Logo />
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
