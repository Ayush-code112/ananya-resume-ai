
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Upload, FileCheck } from "lucide-react";
import { useState } from "react";

const UploadResume = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fileName) {
      setUploading(true);
      // Simulate uploading
      setTimeout(() => {
        setUploading(false);
        setUploaded(true);
        setActiveTab("results");
      }, 2000);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-center">Resume Analysis</h1>
            <p className="text-center text-muted-foreground mt-2 mb-8">
              Upload your resume for AI-powered analysis and optimization
            </p>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upload">Upload</TabsTrigger>
                <TabsTrigger value="results" disabled={!uploaded}>Results</TabsTrigger>
                <TabsTrigger value="optimize" disabled={!uploaded}>Optimize</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload">
                <Card className="border-2 border-dashed border-spark-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Upload Your Resume</CardTitle>
                    <CardDescription>
                      Our AI will analyze your resume and provide personalized feedback
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                      <label htmlFor="resume-upload" className="relative cursor-pointer w-full">
                        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary/50 bg-muted/50 px-6 py-10 text-center hover:bg-muted transition-colors">
                          <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                          <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
                            <span className="font-semibold text-primary">Click to upload</span>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            PDF, DOCX, or TXT (max 5MB)
                          </p>
                          {fileName && (
                            <div className="mt-4 text-sm font-medium text-spark-600">
                              {fileName}
                            </div>
                          )}
                        </div>
                        <input
                          id="resume-upload"
                          name="resume"
                          type="file"
                          accept=".pdf,.docx,.txt"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button 
                      disabled={!fileName || uploading} 
                      className="bg-spark-600 hover:bg-spark-700 text-white" 
                      onClick={handleSubmit}
                    >
                      {uploading ? "Analyzing..." : "Analyze Resume"}
                    </Button>
                  </CardFooter>
                </Card>
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4 text-center">Why Analyze Your Resume?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "AI-Powered Feedback",
                        description: "Get detailed insights on how to improve your resume based on industry standards.",
                        icon: <FileText className="h-10 w-10 text-spark-600" />,
                      },
                      {
                        title: "Optimize for ATS",
                        description: "Ensure your resume passes through Applicant Tracking Systems with our optimization tips.",
                        icon: <FileCheck className="h-10 w-10 text-teal-500" />,
                      },
                      {
                        title: "Tailored Recommendations",
                        description: "Receive personalized suggestions specific to your career goals and target industry.",
                        icon: <FileText className="h-10 w-10 text-spark-600" />,
                      },
                    ].map((feature, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-4">
                        <div className="mb-4 rounded-full bg-primary/10 p-3">
                          {feature.icon}
                        </div>
                        <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="results">
                <Card>
                  <CardHeader>
                    <CardTitle>Resume Analysis Results</CardTitle>
                    <CardDescription>
                      AI-powered insights for your resume
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50">
                      <div>
                        <h3 className="font-medium">Overall Score</h3>
                        <p className="text-sm text-muted-foreground">Based on content, format, and industry standards</p>
                      </div>
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-spark-600 text-white font-bold text-xl">
                        72%
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Section Scores</h3>
                      {[
                        { name: "Professional Experience", score: 85, feedback: "Good detail, but could use more quantifiable achievements" },
                        { name: "Skills & Technologies", score: 65, feedback: "Add more relevant technical skills aligned with job targets" },
                        { name: "Education & Certifications", score: 90, feedback: "Well-formatted and comprehensive" },
                        { name: "Resume Summary", score: 60, feedback: "Too generic, needs more personality and career focus" },
                      ].map((section, i) => (
                        <div key={i} className="rounded-md border p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">{section.name}</h4>
                            <span className={`text-sm font-medium px-2 py-1 rounded-full
                              ${section.score >= 80 ? "bg-green-50 text-green-700" : 
                                section.score >= 60 ? "bg-amber-50 text-amber-700" : 
                                "bg-red-50 text-red-700"}`}>
                              {section.score}%
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{section.feedback}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="rounded-md border p-4 bg-muted/20">
                      <h4 className="font-medium mb-2">Key Improvement Areas</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Quantify your achievements with specific metrics and results</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Add more industry-specific keywords to improve ATS compatibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Revise your summary to be more targeted to specific roles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Use more action verbs to describe your responsibilities</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button 
                      className="bg-spark-600 hover:bg-spark-700 text-white"
                      onClick={() => setActiveTab("optimize")}
                    >
                      Optimize Your Resume
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="optimize">
                <Card>
                  <CardHeader>
                    <CardTitle>Resume Optimization</CardTitle>
                    <CardDescription>
                      AI-powered suggestions to improve your resume
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-md border p-4 bg-muted/20">
                      <h4 className="font-medium mb-2">Summary Improvement</h4>
                      <div className="space-y-4">
                        <div className="rounded-md bg-red-50 p-3 border border-red-200">
                          <p className="text-sm text-red-700">
                            <span className="font-medium">Original: </span> 
                            Experienced developer with a passion for creating great applications. Skilled in various technologies and looking for new opportunities.
                          </p>
                        </div>
                        <div className="rounded-md bg-green-50 p-3 border border-green-200">
                          <p className="text-sm text-green-700">
                            <span className="font-medium">Optimized: </span> 
                            Results-driven Frontend Developer with 5+ years of experience building responsive web applications using React and TypeScript. Passionate about creating intuitive user interfaces that drive engagement and deliver exceptional user experiences.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-md border p-4 bg-muted/20">
                      <h4 className="font-medium mb-2">Experience Enhancement</h4>
                      <div className="space-y-4">
                        <div className="rounded-md bg-red-50 p-3 border border-red-200">
                          <p className="text-sm text-red-700">
                            <span className="font-medium">Original: </span> 
                            Developed and maintained websites for various clients. Worked on frontend and backend technologies.
                          </p>
                        </div>
                        <div className="rounded-md bg-green-50 p-3 border border-green-200">
                          <p className="text-sm text-green-700">
                            <span className="font-medium">Optimized: </span> 
                            Developed and maintained 12+ responsive websites for enterprise clients, reducing load time by 40% through optimization techniques. Led the migration from legacy systems to React, resulting in a 25% increase in user engagement metrics.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-md border p-4 bg-muted/20">
                      <h4 className="font-medium mb-2">Skills Section Enhancement</h4>
                      <div className="space-y-4">
                        <div className="rounded-md bg-red-50 p-3 border border-red-200">
                          <p className="text-sm text-red-700">
                            <span className="font-medium">Original: </span> 
                            JavaScript, HTML, CSS, React
                          </p>
                        </div>
                        <div className="rounded-md bg-green-50 p-3 border border-green-200">
                          <p className="text-sm text-green-700">
                            <span className="font-medium">Optimized: </span> 
                            <strong>Technical:</strong> React.js, TypeScript, Node.js, RESTful APIs, GraphQL, Redux, HTML5, CSS3/SASS, Tailwind CSS, Jest/RTL<br />
                            <strong>Tools:</strong> Git, Webpack, Docker, AWS, CI/CD, Figma, Jira<br />
                            <strong>Soft Skills:</strong> Agile Methodology, Team Leadership, Technical Documentation, Problem-solving
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-md border p-4 bg-muted/20">
                      <h4 className="font-medium mb-2">ATS Optimization Tips</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Use a clean, single-column layout for better parsing by ATS systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Include keywords from the job descriptions you're targeting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Avoid tables, headers/footers, and images that ATS can't parse properly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Use standard section headings (e.g., "Experience" instead of "Career Journey")</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-4">
                    <Button variant="outline">Download Suggestions</Button>
                    <Button className="bg-spark-600 hover:bg-spark-700 text-white">
                      Generate Optimized Resume
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UploadResume;
