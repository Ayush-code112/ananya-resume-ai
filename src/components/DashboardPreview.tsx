
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const stats = [
  { label: "Applications Sent", value: "24" },
  { label: "Responses", value: "8" },
  { label: "Interviews", value: "3" },
  { label: "Success Rate", value: "33%" },
];

const DashboardPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Track Your Progress in Real-Time
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Monitor your job applications, resume performance, and interview success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Application Performance</CardTitle>
                  <CardDescription>Your current job search metrics and analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center p-4 rounded-lg bg-muted/50">
                        <p className="text-3xl font-bold text-spark-600">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Resume Optimization Score</span>
                        <span className="text-sm font-medium text-spark-600">72%</span>
                      </div>
                      <Progress value={72} className="h-2 bg-muted" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Skills Match for Target Roles</span>
                        <span className="text-sm font-medium text-spark-600">85%</span>
                      </div>
                      <Progress value={85} className="h-2 bg-muted" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Application Completion</span>
                        <span className="text-sm font-medium text-spark-600">60%</span>
                      </div>
                      <Progress value={60} className="h-2 bg-muted" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-4">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest job search activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: "Applied to", company: "Tech Innovations Inc", role: "Frontend Developer", time: "2 hours ago" },
                      { action: "Resume viewed by", company: "Global Systems", role: "React Developer", time: "1 day ago" },
                      { action: "Interview scheduled with", company: "Advance Solutions", role: "UI/UX Designer", time: "3 days ago" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-start space-x-4 rounded-lg border p-3">
                        <div>
                          <p className="text-sm font-medium">{activity.action} <span className="text-spark-600">{activity.company}</span></p>
                          <p className="text-xs text-muted-foreground">{activity.role}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
