
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative z-10 mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Transform Your Job Search with{" "}
              <span className="bg-gradient-to-r from-spark-600 to-teal-500 bg-clip-text text-transparent">
                AI-Powered Insights
              </span>
            </h1>
            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              Optimize your resume, get matched with perfect job opportunities, and increase your
              interview success rate with our intelligent job search assistant.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-spark-600 hover:bg-spark-700 text-white min-w-[150px]">
                <Link to="/upload">Analyze Resume</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-spark-200 text-spark-700 hover:bg-spark-50 min-w-[150px]">
                <Link to="/jobs">Find Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-spark-100 blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-100 blur-3xl opacity-30"></div>
    </div>
  );
};

export default Hero;
