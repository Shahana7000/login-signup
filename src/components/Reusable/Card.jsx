import React from 'react';
import { cn } from "../../lib/utils";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-[16px] border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
