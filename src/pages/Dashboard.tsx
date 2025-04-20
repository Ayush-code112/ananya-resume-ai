
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Briefcase, Mail, Star } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Track your job search progress and insights</p>
            </div>
            <Button className="mt-4 md:mt-0 bg-spark-600 hover:bg-spark-700 text-white">
              <FileText className="mr-2 h-4 w-4" /> Upload New Resume
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Applications", value: "24", icon: <Mail className="h-5 w-5 text-spark-600" /> },
              { label: "Interviews", value: "3", icon: <Briefcase className="h-5 w-5 text-teal-500" /> },
              { label: "Success Rate", value: "33%", icon: <Star className="h-5 w-5 text-spark-600" /> },
              { label: "Resume Score", value: "72", icon: <FileText className="h-5 w-5 text-teal-500" /> },
            ].map((stat, i) => (
              <Card key={i}>
                <CardContent className="flex flex-row items-center justify-between pt-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    {stat.icon}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="applications" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-grid">
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Track your recent job applications and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b">
                      <div className="col-span-5">Position</div>
                      <div className="col-span-3">Company</div>
                      <div className="col-span-2">Date</div>
                      <div className="col-span-2">Status</div>
                    </div>
                    
                    {[
                      { position: "Frontend Developer", company: "Tech Innovations Inc", date: "Mar 18, 2025", status: "Applied" },
                      { position: "React Developer", company: "Global Systems", date: "Mar 15, 2025", status: "Interview" },
                      { position: "UI/UX Designer", company: "Creative Solutions", date: "Mar 12, 2025", status: "Rejected" },
                      { position: "Full Stack Engineer", company: "Advance Solutions", date: "Mar 10, 2025", status: "Interview" },
                      { position: "JavaScript Developer", company: "Web Platforms Inc", date: "Mar 5, 2025", status: "Applied" },
                    ].map((app, i) => (
                      <div key={i} className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="col-span-5 font-medium">{app.position}</div>
                        <div className="col-span-3 text-muted-foreground">{app.company}</div>
                        <div className="col-span-2 text-sm text-muted-foreground">{app.date}</div>
                        <div className="col-span-2">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                            ${app.status === "Applied" ? "bg-blue-50 text-blue-700" : 
                              app.status === "Interview" ? "bg-green-50 text-green-700" : 
                              "bg-red-50 text-red-700"}`}>
                            {app.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="insights" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resume Performance</CardTitle>
                  <CardDescription>How your resume is performing with employers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Overall Resume Score</span>
                        <span className="text-sm font-medium text-spark-600">72%</span>
                      </div>
                      <Progress value={72} className="h-2 bg-muted" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Experience Section</span>
                        <span className="text-sm font-medium text-spark-600">85%</span>
                      </div>
                      <Progress value={85} className="h-2 bg-muted" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Skills Section</span>
                        <span className="text-sm font-medium text-spark-600">65%</span>
                      </div>
                      <Progress value={65} className="h-2 bg-muted" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Education Section</span>
                        <span className="text-sm font-medium text-spark-600">90%</span>
                      </div>
                      <Progress value={90} className="h-2 bg-muted" />
                    </div>
                    
                    <div className="rounded-md border p-4 bg-muted/20 mt-6">
                      <h4 className="font-medium mb-2">AI Recommendations</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Quantify your achievements with specific metrics in the experience section</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Add more technical skills relevant to the positions you're applying for</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-spark-600">•</span>
                          <span>Use more action verbs in your job descriptions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="recommendations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Actions</CardTitle>
                  <CardDescription>Personalized suggestions to improve your job search</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Update your skills section", description: "Add React.js, TypeScript and Node.js to highlight your technical expertise.", priority: "High" },
                      { title: "Revise your resume summary", description: "Focus more on your achievements and career objectives.", priority: "Medium" },
                      { title: "Follow up on Tech Innovations application", description: "It's been a week since you applied. Send a follow-up email.", priority: "High" },
                      { title: "Add a portfolio link", description: "Include your GitHub or personal website to showcase your projects.", priority: "Medium" },
                    ].map((rec, i) => (
                      <div key={i} className="flex items-start space-x-4 rounded-lg border p-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{rec.title}</h4>
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                              ${rec.priority === "High" ? "bg-red-50 text-red-700" : "bg-amber-50 text-amber-700"}`}>
                              {rec.priority} Priority
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{rec.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
