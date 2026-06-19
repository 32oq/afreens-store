"use client";

import { useState, useEffect } from "react";

export function RouteProgressBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Listen to route changes
    const handleRouteChange = () => {
      setIsLoading(true);
      setProgress(10);
    };

    const handleRouteChangeComplete = () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 200);
    };

    // Simulate route change on any link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.getAttribute("href")?.startsWith("/")) {
        handleRouteChange();
        // Simulate completion after a short delay
        setTimeout(handleRouteChangeComplete, 500);
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  // Simulate progress
  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return 90;
        return prev + Math.random() * 30;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 h-1 z-50">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transition-all duration-300 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </>
  );
}
