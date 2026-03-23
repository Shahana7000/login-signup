import React from 'react';
import logoImg from '../../assets/logo.png'

export function Logo({ className }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className || ''}`}>
      <img src={logoImg} alt="Infliuence Logo" className="h-12 sm:h-14 md:h-16 w-auto" />
    </div>
  );
}

export default Logo;
