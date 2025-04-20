
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Star, Bookmark, Search, Briefcase } from "lucide-react";
import { useState } from "react";

const jobsData = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc",
    location: "San Francisco, CA (Remote)",
    matchScore: 92,
    skills: ["React", "TypeScript", "UI/UX", "API Integration"],
    salary: "$120K - $150K",
    posted: "2 days ago",
    description: "We're looking for a Senior Frontend Developer to join our team and help build revolutionary web applications. You'll be responsible for creating responsive, fast, and elegant interfaces.",
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
    description: "Join our engineering team to build scalable web applications. You'll work with both frontend and backend technologies to deliver complete solutions.",
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
    description: "We're seeking a talented UI/UX Designer to create beautiful, functional interfaces for our products. You'll work closely with our development and product teams.",
    bookmarked: false
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Startup Innovators",
    location: "Chicago, IL (Remote)",
    matchScore: 79,
    skills: ["React", "JavaScript", "CSS", "Responsive Design"],
    salary: "$90K - $110K",
    posted: "5 days ago",
    description: "Join our fast-growing startup to build modern web experiences. You'll be responsible for implementing responsive designs and collaborating with our design team.",
    bookmarked: false
  },
  {
    id: 5,
    title: "React Developer",
    company: "Digital Platforms Inc",
    location: "Los Angeles, CA (Hybrid)",
    matchScore: 77,
    skills: ["React", "Redux", "JavaScript", "REST APIs"],
    salary: "$85K - $115K",
    posted: "1 week ago",
    description: "We're looking for a React Developer to join our frontend team. You'll work on building interactive web applications and improving our existing products.",
    bookmarked: false
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "Tech Solutions Group",
    location: "Seattle, WA (Onsite)",
    matchScore: 73,
    skills: ["JavaScript", "Python", "React", "API Development"],
    salary: "$100K - $130K",
    posted: "2 weeks ago",
    description: "Join our engineering team to develop innovative software solutions. You'll be involved in the full development lifecycle from design to deployment.",
    bookmarked: false
  }
];

const Jobs = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [matchThreshold, setMatchThreshold] = useState([60]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  
  // Filter jobs based on search criteria
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = location === "" || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesThreshold = job.matchScore >= matchThreshold[0];
    
    return matchesSearch && matchesLocation && matchesThreshold;
  });
  
  const toggleBookmark = (id: number) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, bookmarked: !job.bookmarked } : job
    ));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Job Matches</h1>
              <p className="text-muted-foreground">AI-powered job recommendations based on your resume</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Search Jobs</label>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Job title, skills, company..."
                          className="pl-8"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Location</label>
                      <Input
                        type="text"
                        placeholder="City, state, or remote"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Job Type</label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="fulltime">Full Time</SelectItem>
                          <SelectItem value="parttime">Part Time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Match Score</label>
                        <span className="text-sm text-muted-foreground">{matchThreshold[0]}%+</span>
                      </div>
                      <Slider
                        defaultValue={[60]}
                        max={100}
                        step={5}
                        value={matchThreshold}
                        onValueChange={setMatchThreshold}
                        className="py-4"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Salary Range</label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any Range</SelectItem>
                          <SelectItem value="50k-75k">$50K - $75K</SelectItem>
                          <SelectItem value="75k-100k">$75K - $100K</SelectItem>
                          <SelectItem value="100k-125k">$100K - $125K</SelectItem>
                          <SelectItem value="125k-150k">$125K - $150K</SelectItem>
                          <SelectItem value="150k+">$150K+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date Posted</label>
                      <Select defaultValue="any">
                        <SelectTrigger>
                          <SelectValue placeholder="Select time frame" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Time</SelectItem>
                          <SelectItem value="day">Last 24 Hours</SelectItem>
                          <SelectItem value="week">Last Week</SelectItem>
                          <SelectItem value="month">Last Month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Filters</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Resume Match Score</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="inline-flex h-32 w-32 items-center justify-center rounded-full border-8 border-primary/10">
                      <div className="text-3xl font-bold">72%</div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">Your resume score affects your job matches. Improve your resume to get better matches.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Improve Resume</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">Showing {filteredJobs.length} matching jobs</p>
                <Select defaultValue="match">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="match">Match Score</SelectItem>
                    <SelectItem value="date">Date Posted</SelectItem>
                    <SelectItem value="salary">Salary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <Card key={job.id} className="overflow-hidden transition-all hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-1">
                              <p className="text-sm font-medium">{job.company}</p>
                              <div className="hidden md:block text-muted-foreground">•</div>
                              <p className="text-sm text-muted-foreground">{job.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center mt-2 md:mt-0">
                            <div className="flex items-center space-x-1 bg-spark-50 text-spark-700 px-3 py-1 rounded-full text-sm font-medium mr-2">
                              <Star className="h-4 w-4 fill-spark-500 text-spark-500" />
                              <span>{job.matchScore}% Match</span>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="ml-auto"
                              onClick={() => toggleBookmark(job.id)}
                            >
                              <Bookmark className={`h-5 w-5 ${job.bookmarked ? "fill-spark-500 text-spark-500" : ""}`} />
                            </Button>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {job.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                          ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-sm">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="font-medium">{job.salary}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Posted {job.posted}</span>
                            <Button className="sm:ml-4 bg-spark-600 hover:bg-spark-700 text-white">Apply Now</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No jobs matching your criteria.</p>
                    <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
                  </div>
                )}
                
                {filteredJobs.length > 0 && (
                  <div className="flex justify-center mt-8">
                    <Button variant="outline">Load More Jobs</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
