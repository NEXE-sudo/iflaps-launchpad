import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ResearchClub = () => (
  <div className="min-h-screen pt-16">
    <section className="max-w-3xl mx-auto py-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Research Club</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Explore scientific inquiry and innovative research methodologies across various academic disciplines. Join us for workshops, projects, and competitions!
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  </div>
);

export default ResearchClub;
