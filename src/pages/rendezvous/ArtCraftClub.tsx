import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ArtCraftClub = () => (
  <div className="min-h-screen pt-16">
    <section className="max-w-3xl mx-auto py-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Art & Craft Club</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Unleash your artistic potential through creative projects and artistic techniques. Join art exhibitions, craft sessions, and more!
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  </div>
);

export default ArtCraftClub;
