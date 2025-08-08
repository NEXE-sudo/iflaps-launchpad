import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const DebateClub = () => (
  <div className="min-h-screen pt-16">
    <section className="max-w-3xl mx-auto py-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Debate Club</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Sharpen your argumentative skills and engage in intellectual discourse on contemporary issues. Participate in debates, MUNs, and more!
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  </div>
);

export default DebateClub;
