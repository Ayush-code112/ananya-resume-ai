
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Bookmark } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc",
    location: "San Francisco, CA (Remote)",
    matchScore: 92,
    skills: ["React", "TypeScript", "UI/UX", "API Integration"],
    salary: "$120K - $150K",
    posted: "2 days ago",
    bookmarked: true
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Global Systems",
    location: "New York, NY (Hybrid)",
    matchScore: 87,
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    salary: "$110K - $135K",
    posted: "1 week ago",
    bookmarked: false
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Solutions",
    location: "Austin, TX (Onsite)",
    matchScore: 81,
    skills: ["Figma", "User Research", "Prototyping", "Visual Design"],
    salary: "$95K - $120K",
    posted: "3 days ago",
    bookmarked: false
  }
];

const JobMatchPreview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              AI-Powered Job Matches
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover opportunities that perfectly align with your skills and experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="relative pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{job.location}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center space-x-1 bg-spark-50 text-spark-700 px-2 py-1 rounded-full text-xs font-medium">
                        <Star className="h-3 w-3 fill-spark-500 text-spark-500" />
                        <span>{job.matchScore}% Match</span>
                      </div>
                      <Button variant="ghost" size="icon" className="mt-2">
                        <Bookmark className={`h-4 w-4 ${job.bookmarked ? "fill-spark-500 text-spark-500" : ""}`} />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {job.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm mt-4">
                    <span className="font-medium">{job.salary}</span>
                    <span className="text-muted-foreground">{job.posted}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full bg-spark-600 hover:bg-spark-700 text-white mt-2">Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-spark-200 text-spark-700 hover:bg-spark-50">View All Job Matches</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobMatchPreview;
