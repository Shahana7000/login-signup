import React from 'react';
import Ellipse1 from '../assets/Ellipse 1.png';
import Ellipse2 from '../assets/Ellipse2.png';
import Ellipse3 from '../assets/Ellipse 3.png';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#FCF5E0] relative overflow-hidden flex items-center justify-center font-sans">
      {/* Background Ellipses */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src={Ellipse3} 
          alt="" 
          className="absolute bottom-[-10%] left-[-10%] w-[120%] h-auto opacity-40" 
        />
        <img 
          src={Ellipse2} 
          alt="" 
          className="absolute bottom-[-15%] left-[-15%] w-[130%] h-auto opacity-30" 
        />
        <img 
          src={Ellipse1} 
          alt="" 
          className="absolute bottom-[-20%] left-[-20%] w-[140%] h-auto opacity-20" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[450px] p-4">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
