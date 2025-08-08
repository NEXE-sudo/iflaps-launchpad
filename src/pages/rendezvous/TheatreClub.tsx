import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const TheatreClub = () => (
  <div className="min-h-screen pt-16">
    <section className="max-w-3xl mx-auto py-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Theatre Club</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Express creativity through dramatic performances, storytelling, and stage arts. Audition for plays, join workshops, and more!
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  </div>
);

export default TheatreClub;
