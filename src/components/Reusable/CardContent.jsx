import React from 'react';
import { cn } from "../../lib/utils";

const CardContent = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "p-5 sm:p-7 md:p-9 flex flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardContent;
