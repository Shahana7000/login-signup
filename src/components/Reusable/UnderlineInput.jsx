import React, { useState } from "react";
import { Input } from "../ui/input"
import { Label } from "../ui/label";
import { cn } from "../../lib/utils"
import { Eye, EyeOff } from "lucide-react";

export function UnderlineInput({
  label,
  placeholder,
  type = "text",
  icon: Icon,
  value,
  onChange,
  className,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";
  const currentType = isPasswordType ? (showPassword ? "text" : "password") : type;
  const DisplayIcon = isPasswordType ? (showPassword ? Eye : EyeOff) : Icon;
  return (
    <div className={cn("flex flex-col space-y-0 relative pb-0.5 sm:pb-1", className)}>
      {label && (
        <Label className="text-[14px]! sm:text-xs font-semibold text-[#231F20]-500 font-quicksand">{label}</Label>
      )}
      <div className="relative">
        <Input
          type={currentType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent border-0 border-b border-gray-300 placeholder:text-[11px]! sm:placeholder:text-[10px] md:placeholder:text-[12px] rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-[#F5A623] text-gray-700 text-sm h-6 sm:h-7"
        />
        {DisplayIcon && (
          <div 
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 text-gray-500",
              isPasswordType && "cursor-pointer hover:text-gray-700 hover:scale-110 transition-all pointer-events-auto"
            )}
            onClick={isPasswordType ? () => setShowPassword(!showPassword) : undefined}
          >
            <DisplayIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </div>
        )}
      </div>
    </div>
  );
}

export default UnderlineInput;
