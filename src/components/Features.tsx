
import { FileText, Briefcase, Star, Mail } from "lucide-react";

const features = [
  {
    title: "AI Resume Analysis",
    description: "Get instant feedback on your resume with our AI-powered analysis tool. Identify strengths and areas for improvement.",
    icon: <FileText className="h-10 w-10 text-spark-600" />,
  },
  {
    title: "Smart Job Matching",
    description: "Our AI matches your skills and experience with job postings to find opportunities that are a perfect fit for you.",
    icon: <Briefcase className="h-10 w-10 text-teal-500" />,
  },
  {
    title: "Application Tracking",
    description: "Keep track of all your job applications in one place. Never miss a follow-up or deadline again.",
    icon: <Mail className="h-10 w-10 text-spark-600" />,
  },
  {
    title: "Performance Insights",
    description: "Gain valuable insights into your application performance and improve your job search strategy.",
    icon: <Star className="h-10 w-10 text-teal-500" />,
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-spark-600 to-teal-500 bg-clip-text text-transparent">
              Supercharge
            </span>{" "}
            Your Job Search
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our AI-powered tools help you optimize every aspect of your job search process
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center rounded-lg border bg-background p-6 text-center shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
