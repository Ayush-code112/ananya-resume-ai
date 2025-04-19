
import { useState } from "react";
import { UploadCloud, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import SampleInsight from "./SampleInsight";

export default function ResumeForm() {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDesc, setJobDesc] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  function handleResumeUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      setResume(e.target.files[0]);
      toast({ title: "Resume uploaded!", description: e.target.files[0].name });
    }
  }

  function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    if (!resume && !jobDesc.trim()) {
      toast({ title: "Please upload your resume or provide a job description!", variant: "destructive" });
      return;
    }
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResults(true);
      toast({ title: "AI insights ready!", description: "See your personalized feedback below." });
    }, 1800);
  }

  return (
    <section className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 border border-brandblue-light">
      <form className="flex flex-col gap-5" onSubmit={handleAnalyze}>
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-gray-700">Upload your resume (.pdf, .docx):</span>
          <div className="flex items-center gap-3">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
              className="file:mr-3 file:bg-brandpurple-dark file:text-white file:px-4 file:py-2 file:rounded-lg file:border-none file:font-semibold file:cursor-pointer file:hover:bg-brandpurple"
            />
            {resume && <span className="text-brandpurple-dark text-sm">{resume.name}</span>}
          </div>
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-semibold text-gray-700">Paste a job description (optional):</span>
          <textarea
            value={jobDesc}
            onChange={e => setJobDesc(e.target.value)}
            rows={4}
            className="resize-none rounded-md border border-brandpurple-light px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandblue-dark"
            placeholder="Paste the text of a job posting here..."
          />
        </label>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 font-semibold text-lg bg-brandpurple-dark text-white rounded-lg py-3 hover:bg-brandpurple focus:outline-none transition"
          disabled={analyzing}
        >
          {analyzing ? (
            <>
              <Zap className="animate-spin w-5 h-5" />
              Analyzing...
            </>
          ) : (
            <>
              <UploadCloud className="w-5 h-5" />
              Get AI Insights
            </>
          )}
        </button>
      </form>
      {showResults && (
        <div className="mt-10">
          <SampleInsight />
        </div>
      )}
    </section>
  );
}
