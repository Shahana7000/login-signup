import React from 'react';
import Card from '../Reusable/Card';
import CardContent from '../Reusable/CardContent';
import { cn } from "../../lib/utils";
import Logo from '../Reusable/Logo';
import AuthBackground from "../Auth/AuthBackground"

const AuthCard = ({ children, cardClassName }) => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden overflow-y-auto flex items-center justify-center font-sans py-8 sm:py-12 bg-gray-50/20">
      
      {/* 3-layer Background */}
      <AuthBackground />

      {/* Card Wrapper - Responsive width, height depends on content */}
      <div className="relative z-10 w-full max-w-[calc(100%-2.5rem)] sm:max-w-md md:max-w-[480px]">
        <Card className={cn("bg-white flex flex-col", cardClassName)}>
          <CardContent className="flex-1">
            {/* Logo — constant top position */}
            <div className="flex justify-center mb-0 mt-2 sm:mt-4">
              <Logo />
            </div>

            {/* Form Content — Constant margin after Logo to match Signup */}
            <div className="mt-2 sm:mt-3 md:mt-4">
              {children}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthCard;
