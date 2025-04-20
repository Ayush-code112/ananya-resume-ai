
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { FileText } from "lucide-react";

const ResumeUpload = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

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
        // In a real application, redirect to results page
      }, 2000);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-dashed border-spark-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Upload Your Resume</CardTitle>
              <CardDescription>
                Our AI will analyze your resume and provide personalized feedback and job matches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <label htmlFor="resume-upload" className="relative cursor-pointer w-full">
                  <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary/50 bg-muted/50 px-6 py-10 text-center hover:bg-muted transition-colors">
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
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
        </div>
      </div>
    </section>
  );
};

export default ResumeUpload;
