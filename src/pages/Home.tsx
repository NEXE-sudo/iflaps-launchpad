import { ArrowRight, BookOpen, Users, Globe, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-education.jpg";

const Home = () => {
  const languages = [
    { name: "English", flag: "🇬🇧", tests: "IELTS, TOEFL, PTE" },
    { name: "French", flag: "🇫🇷", tests: "DELF, DALF, TCF" },
    { name: "German", flag: "🇩🇪", tests: "Goethe, TestDaF" },
    { name: "Russian", flag: "🇷🇺", tests: "TORFL, TRKI" }
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Instructors",
      description: "Learn from certified native speakers with years of teaching experience"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Materials",
      description: "Access video lessons, PDFs, assignments, and practice tests"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Prepare for internationally recognized language proficiency tests"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Results",
      description: "High success rates in test preparation and career advancement"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Master Languages,
                <span className="block text-accent">Unlock Your Future</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Join thousands of students preparing for international careers with expert-led courses in English, French, German, and Russian.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="premium" size="xl" asChild>
                  <Link to="/auth/signup">Start Learning Free</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-in">
              <img 
                src={heroImage} 
                alt="Students learning languages online" 
                className="rounded-2xl shadow-glow animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learn Popular Languages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the world's most in-demand languages with our comprehensive test preparation and general speaking courses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <Card key={language.name} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:animate-float">
                    {language.flag}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {language.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {language.tests}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose iFLAPS?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our innovative approach to language learning and test preparation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-card group-hover:shadow-glow transition-all duration-300 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Language Journey?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join our community of successful students and start preparing for your international goals today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/courses">
                  Browse All Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="premium" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;