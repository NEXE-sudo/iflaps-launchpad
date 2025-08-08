import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const FinancialLiteracyClub = () => (
  <div className="min-h-screen pt-16">
    <section className="max-w-3xl mx-auto py-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Financial Literacy Club</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Learn essential financial skills, investment strategies, and economic awareness. Attend seminars, workshops, and simulation games!
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  </div>
);

export default FinancialLiteracyClub;
