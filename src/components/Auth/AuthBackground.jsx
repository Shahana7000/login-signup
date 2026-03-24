import React from 'react';
import GroupEllipse from "../../assets/groupellipse.png";
import BgTop from "../../assets/bgTop.png";

const AuthBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
      background: 'linear-gradient(180deg, #fdecb3 0%, #fdf9ea 0%, #fdf9ea 100%)',
      }}
    >
      {/* Top Blurry Asset */}
      <img
        src={BgTop}
        alt=""
        className="absolute top-0 left-0 w-full object-cover opacity-70 z-[-1]"
        style={{ height: 'auto', maxHeight: '50vh' }}
      />

      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end overflow-hidden">
                <img
                src={GroupEllipse}
                alt=""
                className="w-full translate-y-[2%] opacity-100"
                />
      </div>
    </div>
  );
};

export default AuthBackground;