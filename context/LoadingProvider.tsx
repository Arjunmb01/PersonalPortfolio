"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/cloned/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Skip loading on mobile and tablets where the 3D character is not rendered
    if (window.innerWidth <= 1024) {
      setIsLoading(false);
      import("../components/cloned/utils/initialFX").then((module) => {
        if (module.initialFX) {
          setTimeout(() => {
            module.initialFX();
          }, 100);
        }
      });
    } else {
      // Safety Fallback: Force hide the loader after 6 seconds if WebGL fails to load
      const fallback = setTimeout(() => {
        setIsLoading(false);
        import("../components/cloned/utils/initialFX").then((module) => {
          if (module.initialFX) {
            module.initialFX();
          }
        });
      }, 6000);

      return () => clearTimeout(fallback);
    }
  }, []);

  useEffect(() => {}, [loading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
