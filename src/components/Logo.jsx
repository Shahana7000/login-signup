export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="flex items-center gap-1">
        <div className="flex flex-col items-center justify-center">
          <div className="w-2.5 h-2.5 bg-[#F5A623] rounded-full sm:mb-0.5"></div>
          <div
            className="w-1.5 h-6 bg-[#F5A623] sm:ml-0 rounded-t-sm"
            style={{
              clipPath: "polygon(0 0, 100% 0, 160% 100%, -60% 100%)",
              width: "14px",
            }}
          ></div>
        </div>
        <div className="text-3xl font-extrabold tracking-tight text-[#1a1c1e]">
          Inf<span className="text-[#F5A623]">li</span>uence
        </div>
      </div>
      <div className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide ml-4 sm:ml-5">
        Ignite, Innovate, Inspire
      </div>
    </div>
  );
}

export default Logo;
