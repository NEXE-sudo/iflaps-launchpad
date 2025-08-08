import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const HindiClub = () => (
  <div className="min-h-screen pt-16">
    <section className="max-w-3xl mx-auto py-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Hindi Club</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Celebrate the richness of Hindi literature, poetry, and cultural expressions. Join us for poetry readings, cultural events, and more!
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  </div>
);

export default HindiClub;
