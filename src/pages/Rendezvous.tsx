import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Microscope, 
  Laptop, 
  Languages, 
  Theater, 
  MessageSquare, 
  TrendingUp, 
  Palette, 
  Heart 
} from "lucide-react";

const clubs = [
  {
    name: "Research Club",
    description: "Explore scientific inquiry and innovative research methodologies across various academic disciplines.",
    icon: Microscope,
    route: "/rendezvous/research"
  },
  {
    name: "Technology Club",
    description: "Dive into the latest tech trends, coding, and digital innovation in our modern world.",
    icon: Laptop,
    route: "/rendezvous/tech"
  },
  {
    name: "Hindi Club",
    description: "Celebrate the richness of Hindi literature, poetry, and cultural expressions.",
    icon: Languages,
    route: "/rendezvous/hindi"
  },
  {
    name: "Theatre Club",
    description: "Express creativity through dramatic performances, storytelling, and stage arts.",
    icon: Theater,
    route: "/rendezvous/theatre"
  },
  {
    name: "Debate Club",
    description: "Sharpen your argumentative skills and engage in intellectual discourse on contemporary issues.",
    icon: MessageSquare,
    route: "/rendezvous/debate"
  },
  {
    name: "Financial Literacy Club",
    description: "Learn essential financial skills, investment strategies, and economic awareness.",
    icon: TrendingUp,
    route: "/rendezvous/financial"
  },
  {
    name: "Art & Craft Club",
    description: "Unleash your artistic potential through creative projects and artistic techniques.",
    icon: Palette,
    route: "/rendezvous/art"
  },
  {
    name: "Community Service Department",
    description: "Make a positive impact through volunteer work and community outreach programs.",
    icon: Heart,
    route: "/rendezvous/community"
  }
];

const Rendezvous = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Rendezvous
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A vibrant community where students come together to explore their passions, develop skills, 
            and create lasting connections. Join our diverse clubs and discover opportunities for personal 
            growth, creative expression, and meaningful collaboration.
          </p>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Clubs & Departments
            </h2>
            <p className="text-muted-foreground">
              Choose your area of interest and start your journey with like-minded peers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clubs.map((club) => {
              const Icon = club.icon;
              return (
                <Card key={club.name} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{club.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-6 text-sm leading-relaxed">
                      {club.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <Button variant="default" className="w-full" asChild>
                        <Link to={club.route}>Learn More</Link>
                      </Button>
                      <Button variant="outline" className="w-full">
                        Join Club
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rendezvous;