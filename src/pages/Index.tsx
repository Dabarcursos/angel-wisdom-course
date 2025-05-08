
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseOverview from "@/components/CourseOverview";
import AboutCourse from "@/components/AboutCourse";
import Professor from "@/components/Professor";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <CourseOverview />
      <AboutCourse />
      <Professor />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
