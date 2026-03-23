import React from 'react';
import { Outlet } from 'react-router-dom';
import { Card, CardContent } from "../ui/card"
import Logo from "../Reusable/Logo"
import AuthBackground from './AuthBackground';

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden overflow-y-auto flex items-center justify-center font-sans py-4 sm:py-6 md:py-8 lg:py-0 lg:overflow-hidden lg:h-screen">
      
      <AuthBackground />

      {/* Card — responsive width & padding */}
      <Card className="relative z-10 w-[calc(100%-2rem)] sm:w-[90%] md:max-w-120 bg-white border-none">
        <CardContent className="px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9">
          {/* Logo — responsive size */}
          <div className="flex justify-center mb-3 sm:mb-5">
            <Logo />
          </div>

          {/* 
            DYNAMIC CONTENT INJECTION:
            The <Outlet /> component is where React Router injects the 
            specific page content (Login, Signup, etc.) matched by the URL.
          */}
          <Outlet />
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthLayout;
