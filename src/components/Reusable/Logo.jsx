import React from 'react';
import logoImg from '../../assets/logo.png'

export function Logo({ className }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className || ''}`}>
      <img src={logoImg} alt="Infliuence Logo" className="h-9 sm:h-10 md:h-12 w-auto" />
    </div>
  );
}

export default Logo;
