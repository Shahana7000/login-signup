import React from 'react';
import logoImg from '../assets/logo.png';

export function Logo({ className }) {
  return (
    <div className={`flex flex-col items-center justify-center mb-6 ${className}`}>
      <img src={logoImg} alt="Infliuence Logo" className="h-16 w-auto" />
    </div>
  );
}

export default Logo;
