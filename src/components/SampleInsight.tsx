
import { BadgeCheck, Flame } from "lucide-react";

export default function SampleInsight() {
  return (
    <section className="max-w-xl mx-auto my-12 bg-gradient-to-tr from-brandpurple-light via-white to-brandblue-light rounded-2xl shadow-xl p-8 border border-brandpurple-light">
      <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-brandpurple-dark">
        <BadgeCheck className="w-6 h-6 text-brandblue-dark" />
        Example AI Resume Feedback
      </h3>
      <ul className="space-y-3 list-disc list-inside text-left">
        <li>
          <span className="font-semibold">Your opening summary should mention your passion for problem-solving and teamwork.</span>
        </li>
        <li>
          <span className="font-semibold">Tailor your "Technical Skills" section to match the requirements of the Data Analyst role at XYZ Corp.</span>
        </li>
        <li>
          "Reduced project turnaround by 23%" is a strong result—move it to the top.
        </li>
        <li className="flex items-center gap-1">
          <Flame className="text-orange-400 w-4 h-4" />
          <span>Add a short achievement story: "Transformed reporting process, saving 5 hours weekly for the team."</span>
        </li>
        <li>
          <span className="text-brandpurple-dark">Recommended Jobs:</span> Data Analyst (XYZ), Product Operations (ABC), Junior PM (DEF)
        </li>
      </ul>
    </section>
  );
}
