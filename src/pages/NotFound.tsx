import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/layout/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="fixed inset-0 grid-bg opacity-30" />
        <div className="text-center relative z-10">
          <h1 className="mb-4 font-orbitron text-8xl font-bold text-primary text-glow">404</h1>
          <p className="mb-6 text-xl text-muted-foreground font-mono">// PAGE_NOT_FOUND</p>
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-rajdhani font-semibold tracking-wider hover:bg-primary/90 transition-colors"
          >
            RETURN HOME
          </a>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
