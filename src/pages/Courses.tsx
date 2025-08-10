import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Search,
  Filter,
  Clock,
  Users,
  Star,
  BookOpen,
  Play,
  FileText,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TrialModal from "@/components/TrialModal";
import TestInfoModal from "@/components/TestInfoModal";
import { testInfoData } from "@/data/testInfo";

interface TestInfo {
  title: string;
  description: string;
  sections: string;
  duration: string;
  score: string;
  validity: string;
  recognition: string;
  features: string[];
}

const Courses = () => {
  // Supabase setup
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTestInfo, setSelectedTestInfo] = useState<TestInfo | null>(
    null
  );

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: false });
      console.log("Fetched courses (no filter):", data);
      if (error) {
        console.error("Supabase error:", error);
        setError(error.message);
        setCourses([]);
      } else {
        setCourses(data || []);
      }
      setLoading(false);
    };
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      (course.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.language || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (course.instructor || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesLanguage =
      selectedLanguage === "all" || course.language === selectedLanguage;
    const matchesFormat =
      selectedFormat === "all" || course.format === selectedFormat;
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
            Choose from our comprehensive range of language courses designed to
            help you achieve your goals.
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
                <Select
                  value={selectedLanguage}
                  onValueChange={setSelectedLanguage}
                >
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
                <Select
                  value={selectedFormat}
                  onValueChange={setSelectedFormat}
                >
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

        {/* Loading/Error State */}
        {loading && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Search className="w-12 h-12 animate-spin" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Loading courses...
            </h3>
          </div>
        )}
        {error && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Search className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Error loading courses
            </h3>
            <p className="text-muted-foreground mb-6">{error}</p>
          </div>
        )}

        {/* Results Count */}
        {!loading && !error && (
          <div className="mb-8 animate-fade-in">
            <p className="text-muted-foreground">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>
        )}

        {/* Course Grid */}
        {!loading && !error && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => {
              // Parse features and trialContent if needed
              let features = course.features;
              if (typeof features === "string") {
                try {
                  features = JSON.parse(features);
                } catch {
                  features = [];
                }
              }
              let trialContent = course.trial_content;
              if (typeof trialContent === "string") {
                try {
                  trialContent = JSON.parse(trialContent);
                } catch {
                  trialContent = {};
                }
              }
              return (
                <Card
                  key={course.id}
                  className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant={
                          course.format === "Live" ? "default" : "secondary"
                        }
                        className="mb-2"
                      >
                        {course.format === "Live" ? "🔴 LIVE" : "📚 SELF-PACED"}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {course.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm mb-2">
                      {course.description}
                    </p>
                    <button
                      onClick={() => {
                        let testType;
                        // Map course titles to test types
                        if (course.title.includes("IELTS")) testType = "IELTS";
                        else if (course.title.includes("TOEFL"))
                          testType = "TOEFL";
                        else if (
                          course.title.includes("Duolingo") ||
                          course.title.includes("DET")
                        )
                          testType = "DET";
                        else if (course.title.includes("DELF"))
                          testType = "DELF";
                        else if (course.title.includes("Business"))
                          testType = "Business English";
                        else if (course.title.includes("French"))
                          testType = "General French";
                        else if (course.title.includes("English"))
                          testType = "General English";

                        const info = testInfoData[testType] || {
                          title: `About ${course.title}`,
                          description:
                            "This test evaluates your language proficiency according to international standards. Contact us for more specific information about this test.",
                          sections: "Various sections based on language skills",
                          duration: "Varies by test level",
                          score: "Proficiency-based scoring",
                          validity: "Check with test provider",
                          recognition: "Internationally recognized",
                          features: [
                            "Professional assessment",
                            "Standardized testing",
                          ],
                        };
                        setSelectedTestInfo(info);
                      }}
                      className="text-primary text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
                    >
                      Know about this test →
                    </button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">
                          {course.language}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">
                          {course.duration_weeks
                            ? `${course.duration_weeks} weeks`
                            : ""}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-accent fill-current" />
                        <span className="text-muted-foreground">
                          {course.rating || "-"}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Level:</span>{" "}
                        {course.level}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Instructor:</span>{" "}
                        {course.instructor}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Lessons:</span>{" "}
                        {course.lessons}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {Array.isArray(features) &&
                        features.slice(0, 3).map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      {Array.isArray(features) && features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{features.length - 3} more
                        </Badge>
                      )}
                    </div>
                    {/* Trial Content Preview */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-foreground">
                          Free Trial Content:
                        </h4>
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="grid grid-cols-1 gap-2 text-xs">
                        <div className="flex items-center space-x-2 p-2 bg-muted/50 rounded-md">
                          <Play className="w-3 h-3 text-primary" />
                          <span className="text-muted-foreground">
                            Sample Video Lesson
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-muted/50 rounded-md">
                          <FileText className="w-3 h-3 text-primary" />
                          <span className="text-muted-foreground">
                            {trialContent?.mockPapers?.length || 0} Mock Papers
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-muted/50 rounded-md">
                          <BookOpen className="w-3 h-3 text-primary" />
                          <span className="text-muted-foreground">
                            {trialContent?.examples?.length || 0} Study Examples
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary">
                            ₹{course.price?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <TrialModal
                            courseTitle={course.title}
                            trialContent={trialContent}
                          >
                            <Button variant="outline" size="sm">
                              Try Free
                            </Button>
                          </TrialModal>
                          <Button variant="hero" size="sm">
                            Enroll Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </section>
        )}

        {/* No Results */}
        {!loading && !error && filteredCourses.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Search className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              No courses found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all available
              courses.
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

        {/* Test Info Modal */}
        <TestInfoModal
          isOpen={!!selectedTestInfo}
          onClose={() => setSelectedTestInfo(null)}
          title={selectedTestInfo?.title || ""}
          description={selectedTestInfo?.description || ""}
          sections={selectedTestInfo?.sections || ""}
          duration={selectedTestInfo?.duration || ""}
          score={selectedTestInfo?.score || ""}
          validity={selectedTestInfo?.validity || ""}
          recognition={selectedTestInfo?.recognition || ""}
          features={selectedTestInfo?.features || []}
        />
      </div>
    </div>
  );
};

export default Courses;
