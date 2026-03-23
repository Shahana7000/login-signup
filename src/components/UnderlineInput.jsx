import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "../lib/utils";

export function UnderlineInput({
  label,
  placeholder,
  type = "text",
  icon: Icon,
  value,
  onChange,
  className,
}) {
  return (
    <div className={cn("flex flex-col space-y-2 relative pb-2", className)}>
      {label && (
        <Label className="text-sm font-semibold text-gray-800">{label}</Label>
      )}
      <div className="relative">
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent border-0 border-b border-gray-300 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-[#F5A623] text-gray-700 h-8"
        />
        {Icon && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500">
            <Icon size={18} />
          </div>
        )}
      </div>
    </div>
  );
}

export default UnderlineInput;
