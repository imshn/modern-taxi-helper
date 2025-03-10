
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-terracotta-500">404</h1>
          <div className="h-1 w-24 bg-terracotta-500 mx-auto my-6"></div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">Page Not Found</h2>
          <p className="text-slate-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        <Link to="/">
          <Button className="bg-terracotta-500 hover:bg-terracotta-600 transition-all duration-300 px-8 py-6">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
