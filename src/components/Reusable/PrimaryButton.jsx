import React from "react";
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

export function PrimaryButton({ children, onClick, className, ...props }) {
  return (
    <Button
      className={cn(
        "w-full bg-[#F5A623] hover:bg-[#e6941a] text-white font-semibold py-2.5 sm:py-3.5 rounded-full transition-colors text-xs sm:text-sm cursor-pointer",
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
