
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-spark-600 to-teal-500 bg-clip-text text-transparent">
            ResumeSpark
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-spark-600 transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-spark-600 transition-colors">
            Dashboard
          </Link>
          <Link to="/jobs" className="text-sm font-medium hover:text-spark-600 transition-colors">
            Find Jobs
          </Link>
          <Link to="/upload" className="text-sm font-medium hover:text-spark-600 transition-colors">
            Upload Resume
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm hover:text-spark-600 transition-colors">Sign In</Button>
          <Button className="bg-spark-600 hover:bg-spark-700 text-white">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
