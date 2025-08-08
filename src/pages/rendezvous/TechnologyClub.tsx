import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const TechnologyClub = () => (
  <div className="min-h-screen pt-16">
    <section className="max-w-3xl mx-auto py-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Technology Club</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Dive into the latest tech trends, coding, and digital innovation in our modern world. Participate in hackathons, coding sessions, and tech talks!
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  </div>
);

export default TechnologyClub;
