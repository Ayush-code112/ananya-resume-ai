
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ResumeUpload from "@/components/ResumeUpload";
import DashboardPreview from "@/components/DashboardPreview";
import JobMatchPreview from "@/components/JobMatchPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ResumeUpload />
        <DashboardPreview />
        <JobMatchPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
