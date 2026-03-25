import React from 'react';
import logoImg from '../../assets/logo.png'

export function Logo({ className }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className || ''}`}>
      <img src={logoImg} alt="Infliuence Logo" className="h-10 sm:h-12 w-auto mt-4" />
    </div>
  );
}

export default Logo;
