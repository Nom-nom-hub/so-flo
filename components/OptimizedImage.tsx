"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  showPlaceholder?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  fill,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  showPlaceholder = true,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {showPlaceholder && !isLoaded && !priority && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"
          style={{
            background: "linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
          }}
        />
      )}
      
      {/* Actual Image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={`transition-all duration-700 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105 blur-sm"
        }`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}