
import { Sparkles, Search, FileText, ThumbsUp } from "lucide-react";

const valueProps = [
  {
    icon: Sparkles,
    title: "AI-Powered Resume Tailoring",
    desc: "Get resume edits and phrasing suggestions to shine for each unique job you apply for.",
  },
  {
    icon: Search,
    title: "Smart Job Matching",
    desc: "Discover curated opportunities that fit your unique strengths, skills, and aspirations.",
  },
  {
    icon: FileText,
    title: "Strengths Highlighted",
    desc: "Surface your most impressive qualities—no more getting lost in the stack of resumes.",
  },
  {
    icon: ThumbsUp,
    title: "Actionable Insights",
    desc: "Receive direct, personalized feedback and tips to boost your interview chances.",
  },
];

export default function ValueProps() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-6 text-brandpurple-dark">Why Career Boost AI?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {valueProps.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-4 bg-white rounded-xl shadow-lg p-6 hover:shadow-purple-100 transition"
          >
            <span className="p-3 rounded-full bg-brandpurple-light text-brandpurple-dark">
              <feature.icon className="w-7 h-7" />
            </span>
            <div>
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
