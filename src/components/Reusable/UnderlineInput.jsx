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
    <div className={cn("flex flex-col space-y-1.5 sm:space-y-2 relative pb-1 sm:pb-2", className)}>
      {label && (
        <Label className="text-xs sm:text-sm font-semibold text-gray-800">{label}</Label>
      )}
      <div className="relative">
        <Input
          type={currentType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent border-0 border-b border-gray-300 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-[#F5A623] text-gray-700 text-sm h-7 sm:h-8"
        />
        {DisplayIcon && (
          <div 
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 text-gray-500",
              isPasswordType && "cursor-pointer hover:text-gray-700 hover:scale-110 transition-all pointer-events-auto"
            )}
            onClick={isPasswordType ? () => setShowPassword(!showPassword) : undefined}
          >
            <DisplayIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default UnderlineInput;
