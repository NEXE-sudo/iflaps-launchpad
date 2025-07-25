import { useState } from "react";
import { Search, Filter, Clock, Users, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const courses = [
    {
      id: 1,
      title: "IELTS Preparation Course",
      language: "English",
      level: "Intermediate to Advanced",
      format: "Live",
      type: "Test Prep",
      price: 15999,
      duration: "8 weeks",
      lessons: 32,
      students: 156,
      rating: 4.8,
      instructor: "Sarah Johnson",
      description: "Comprehensive IELTS preparation covering all four skills: Reading, Writing, Listening, and Speaking.",
      features: ["Live Classes", "Mock Tests", "Personal Feedback", "Study Materials"]
    },
    {
      id: 2,
      title: "French Conversation Mastery",
      language: "French",
      level: "Beginner to Intermediate",
      format: "Self-paced",
      type: "General",
      price: 8999,
      duration: "12 weeks",
      lessons: 48,
      students: 89,
      rating: 4.7,
      instructor: "Marie Dubois",
      description: "Build confidence in French conversation with practical scenarios and real-world applications.",
      features: ["Video Lessons", "Practice Exercises", "Pronunciation Guide", "Cultural Insights"]
    },
    {
      id: 3,
      title: "German TestDaF Preparation",
      language: "German",
      level: "Upper Intermediate",
      format: "Live",
      type: "Test Prep",
      price: 18999,
      duration: "10 weeks",
      lessons: 40,
      students: 73,
      rating: 4.9,
      instructor: "Hans Mueller",
      description: "Intensive TestDaF preparation for university admission in Germany.",
      features: ["Expert Guidance", "Test Strategies", "Writing Practice", "Speaking Sessions"]
    },
    {
      id: 4,
      title: "Russian for Beginners",
      language: "Russian",
      level: "Beginner",
      format: "Self-paced",
      type: "General",
      price: 6999,
      duration: "16 weeks",
      lessons: 64,
      students: 42,
      rating: 4.6,
      instructor: "Natasha Volkov",
      description: "Start your Russian language journey with structured lessons covering basics to intermediate level.",
      features: ["Cyrillic Script", "Basic Grammar", "Vocabulary Building", "Audio Practice"]
    },
    {
      id: 5,
      title: "TOEFL Speaking Excellence",
      language: "English",
      level: "Intermediate",
      format: "Live",
      type: "Test Prep",
      price: 12999,
      duration: "6 weeks",
      lessons: 24,
      students: 134,
      rating: 4.8,
      instructor: "Michael Brown",
      description: "Focused TOEFL speaking preparation with proven techniques and practice sessions.",
      features: ["Speaking Practice", "Feedback Sessions", "Exam Strategies", "Confidence Building"]
    },
    {
      id: 6,
      title: "DELF B2 French Preparation",
      language: "French",
      level: "Upper Intermediate",
      format: "Live",
      type: "Test Prep",
      price: 16999,
      duration: "8 weeks",
      lessons: 32,
      students: 67,
      rating: 4.7,
      instructor: "Pierre Laurent",
      description: "Achieve DELF B2 certification with comprehensive preparation and expert guidance.",
      features: ["Exam Simulation", "Oral Practice", "Written Expression", "Comprehension Skills"]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage = selectedLanguage === "all" || course.language === selectedLanguage;
    const matchesFormat = selectedFormat === "all" || course.format === selectedFormat;
    const matchesType = selectedType === "all" || course.type === selectedType;
    
    return matchesSearch && matchesLanguage && matchesFormat && matchesType;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of language courses designed to help you achieve your goals.
          </p>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <Card className="bg-gradient-card border-0 shadow-card animate-slide-in">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search courses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="French">French</SelectItem>
                    <SelectItem value="German">German</SelectItem>
                    <SelectItem value="Russian">Russian</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    <SelectItem value="Live">Live Classes</SelectItem>
                    <SelectItem value="Self-paced">Self-paced</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Test Prep">Test Preparation</SelectItem>
                    <SelectItem value="General">General Speaking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Results Count */}
        <div className="mb-8 animate-fade-in">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Card key={course.id} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={course.format === "Live" ? "default" : "secondary"} className="mb-2">
                    {course.format === "Live" ? "🔴 LIVE" : "📚 SELF-PACED"}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {course.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {course.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{course.language}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent fill-current" />
                    <span className="text-muted-foreground">{course.rating}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Level:</span> {course.level}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Instructor:</span> {course.instructor}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Lessons:</span> {course.lessons}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                  {course.features.slice(0, 3).map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {course.features.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{course.features.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        ₹{course.price.toLocaleString()}
                      </span>
                    </div>
                    <Button variant="hero" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Search className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              No courses found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all available courses.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedLanguage("all");
                setSelectedFormat("all");
                setSelectedType("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;