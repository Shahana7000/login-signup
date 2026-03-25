import React from "react";
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

export function PrimaryButton({ children, onClick, className, ...props }) {
  return (
    <Button
  className={cn(
    "w-full bg-linear-to-r from-[#FCB535] to-[#F5A623] py-4 text-white font-semibold sm:py-3.5 rounded-[5px] transition-all duration-300 text-[9px]! sm:text-sm! cursor-pointer",
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
