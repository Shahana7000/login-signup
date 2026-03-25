import React from "react";
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

export function PrimaryButton({ children, onClick, className, ...props }) {
  return (
   <Button
  className={cn(
    "w-full bg-linear-to-r from-[#FCB535] to-[#F5A623] py-2 sm:py-2.5 text-white font-semibold rounded-[6px]! transition-all duration-300 text-[9px]! sm:text-[10px]! cursor-pointer border-none",
    "hover:from-[#e6a52f] hover:to-[#e6941a]",
    className
  )}
  onClick={onClick}
  {...props}
>
  {children}
</Button>
  )
}

export default PrimaryButton;
