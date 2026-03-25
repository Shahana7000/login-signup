import React, { useState, useEffect } from 'react';
import { cn } from "../../lib/utils";

const Card = ({ children, className, style, ...props }) => {
  const [zoomScale, setZoomScale] = useState(1);

  useEffect(() => {
    const handleZoom = () => {
      // Counteract 150% zoom so it looks the same as 100%
      if (window.devicePixelRatio >= 1.5) {
        setZoomScale(1 / 1.5);
      } else {
        setZoomScale(1);
      }
    };

    window.addEventListener('resize', handleZoom);
    handleZoom();

    return () => window.removeEventListener('resize', handleZoom);
  }, []);

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border-none transition-all duration-300",
        className
      )}
      style={{
        ...style,
        transform: zoomScale !== 1 ? `scale(${zoomScale})` : undefined,
        transformOrigin: "center center",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
