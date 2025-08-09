import { Users, Target, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CountUp from "@/components/CountUp";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To empower students and professionals with the language skills needed to succeed in an increasingly connected world."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Preparing students for opportunities in Canada, Germany, France, Russia, and beyond with recognized certifications."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Maintaining the highest standards in language education with proven methodologies and expert instructors."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a supportive learning environment where students achieve their language learning goals together."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About iFLAPS Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a premier language learning platform dedicated to helping
            students and working professionals master English, French, German,
            and Russian for international opportunities.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  iFLAPS Education was founded with a simple yet powerful
                  vision: to break down language barriers and open doors to
                  global opportunities. We understand that in today's
                  interconnected world, language proficiency is not just an
                  advantage—it's a necessity.
                </p>
                <p>
                  Our platform serves students and working professionals who are
                  preparing to study or work abroad, particularly in popular
                  destinations like Canada, Germany, France, and Russia. We
                  provide both general speaking courses and specialized test
                  preparation programs.
                </p>
                <p>
                  What sets us apart is our comprehensive approach that combines
                  expert instruction, cutting-edge technology, and proven
                  methodologies to deliver results that matter. Our students
                  don't just learn languages—they achieve their dreams.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      <CountUp
                        from={0}
                        to={4}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                    </div>
                    <div className="text-muted-foreground">Languages</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      <CountUp
                        from={0}
                        to={1000}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                      +
                    </div>
                    <div className="text-muted-foreground">Students</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      <CountUp
                        from={0}
                        to={95}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />%
                    </div>
                    <div className="text-muted-foreground">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      24/7
                    </div>
                    <div className="text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape the experience
              we provide to our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white shadow-card group-hover:shadow-glow transition-all duration-300">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our expert instructors are native speakers and certified
            professionals with years of experience in language education and
            test preparation.
          </p>

          <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Coming Soon
            </h3>
            <p className="text-muted-foreground">
              We're preparing detailed profiles of our amazing team members.
              Check back soon to learn more about the experts who will guide
              your language learning journey.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;