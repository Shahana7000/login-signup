import React from 'react';
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";
import Logo from '../Reusable/Logo';
import AuthBackground from "../Auth/AuthBackground"

const AuthCard = ({ children, cardClassName }) => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden overflow-y-auto flex items-center justify-center font-sans py-4 sm:py-6 md:py-8 lg:py-0 lg:overflow-hidden lg:h-screen bg-gray-50/20">
      
      {/* 3-layer Background */}
      <AuthBackground />

      {/* Card Wrapper */}
      <Card className={ cn("relative z-10 w-[calc(100%-2rem)] sm:w-[85%] md:w-118 md:h-138 bg-white border-none shadow-none rounded-[16px] flex flex-col", cardClassName) }>
        <CardContent className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-4 flex flex-col flex-1 h-full">
          {/* Logo — constant top position */}
          <div className="flex justify-center mb-0 mt-2 sm:mt-4 md:mt-4">
            <Logo />
          </div>

          {/* Form Content — centered in remaining space */}
          <div className="flex-1 flex flex-col justify-center">
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCard;
