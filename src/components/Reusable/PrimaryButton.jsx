import React from "react";
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

export function PrimaryButton({ children, onClick, className, ...props }) {
  return (
    <Button
      className={cn(
        "w-full bg-[#F5A623] hover:bg-[#e6941a] text-white font-semibold py-5 sm:py-6 rounded-full transition-colors text-sm sm:text-base shadow-md hover:shadow-lg cursor-pointer",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
