import React from 'react';
import Ellipse1 from "../../assets/Ellipse1.png"
import Ellipse2 from '../../assets/Ellipse2.png';
import Ellipse3 from '../../assets/Ellipse3.png';

const AuthBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, #FFFEF5 0%, #FFF8D6 45%, #FFE99A 80%, #FFD46A 100%)',
      }}
    >
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end">
        {/* We use translate-y to slightly push them down without relying on relative percentage bottoms which can vary wildly */}
        <img
          src={Ellipse3}
          alt=""
          className="absolute bottom-0 translate-y-[10%] w-full sm:w-[120%] lg:w-full max-w-none opacity-100"
        />
        <img
          src={Ellipse2}
          alt=""
          className="absolute bottom-0 translate-y-[15%] w-[130%] sm:w-full lg:w-[80%] max-w-none opacity-100"
        />
        <img
          src={Ellipse1}
          alt=""
          className="absolute bottom-0 translate-y-[20%] w-[150%] sm:w-[80%] lg:w-[60%] max-w-none opacity-100"
        />
      </div>
    </div>
  );
};

export default AuthBackground;
