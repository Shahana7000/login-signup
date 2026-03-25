import React from 'react';
import { cn } from "../../lib/utils";

const CardContent = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "px-5 pb-5 pt-1 sm:px-7 sm:pb-7 sm:pt-3 md:px-9 md:pb-9 md:pt-5 flex flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardContent;
