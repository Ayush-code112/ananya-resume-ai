
import ResumeForm from "@/components/ResumeForm";
import ValueProps from "@/components/ValueProps";
import { AlertCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-brandpurple-light via-white to-brandblue-light flex flex-col">
      <header className="pt-14 pb-8 md:pb-14 max-w-2xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-brandpurple-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-3">
          <AlertCircle className="w-5 h-5" />
          The Job Search Struggle is Real
        </span>
        <h1 className="font-playfair text-5xl md:text-6xl text-brandpurple-dark font-bold mb-5 leading-tight drop-shadow-xl">
          Career Boost <span className="text-brandblue-dark">AI Assistant Pro</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          Over 200 resumes sent, and still no replies? You're not alone.<br />
          Discover your personalized <span className="font-semibold">Resume Score</span> and <span className="font-semibold">Interview Rate</span> to optimize your job search.<br />
          Let AI tailor your resume and match you with the right jobs.
        </p>
        <a
          href="#resume-ai"
          className="inline-block px-8 py-3 bg-brandblue-dark font-semibold text-white rounded-full text-lg shadow hover:bg-brandpurple-dark transition"
        >
          Try Career Boost AI Now
        </a>
      </header>
      <main className="flex-1 w-full">
        <ValueProps />
        <div id="resume-ai">
          <ResumeForm />
        </div>
      </main>
      <footer className="text-center text-gray-400 py-10 text-sm">
        © {new Date().getFullYear()} Career Boost AI Assistant Pro · Helping jobseekers shine brighter.
      </footer>
    </div>
  );
};

export default Index;
