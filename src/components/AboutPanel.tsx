import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

const AboutPanel = () => {
  return (
    <section aria-label="The Human Behind the Spacecraft" className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold">The Human <span className="text-highlight">Behind</span> the Spacecraft</h2>
        </div>
        <Card className="glass-card p-4 sm:p-6">
          <Tabs defaultValue="care">
            <TabsList className="glass-card p-1 mb-4">
              <TabsTrigger value="care">What I care about</TabsTrigger>
              <TabsTrigger value="bring">What I bring</TabsTrigger>
              <TabsTrigger value="fun">Fun layer</TabsTrigger>
            </TabsList>
            <TabsContent value="care" className="text-sm sm:text-base text-muted-foreground">
              Users. Experience. Quality. I focus on outcomes and accessibility.
            </TabsContent>
            <TabsContent value="bring" className="text-sm sm:text-base text-muted-foreground">
              Process. Skills. Ownership. I bridge product, design, and engineering.
            </TabsContent>
            <TabsContent value="fun" className="text-sm sm:text-base text-muted-foreground">
              Movies 🍿 Food 🍜 Music 🎵 Travel (I wish) ✈ .
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default AboutPanel;


