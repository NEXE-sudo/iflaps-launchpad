import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, FileText, BookOpen, Download, Eye } from "lucide-react";

interface TrialContent {
  videoUrl: string;
  mockPapers: string[];
  examples: string[];
}

interface TrialModalProps {
  courseTitle: string;
  trialContent: TrialContent;
  children: React.ReactNode;
}

const TrialModal = ({ courseTitle, trialContent, children }: TrialModalProps) => {
  const [activeTab, setActiveTab] = useState("video");

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Free Trial: {courseTitle}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Sample Video
            </TabsTrigger>
            <TabsTrigger value="papers" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Mock Papers
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Examples
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="video" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Sample Lesson Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <iframe
                    src={trialContent.videoUrl}
                    title="Course Sample Video"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  This is a sample lesson from the full course. Upgrade to access all video content.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="papers" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Mock Papers & Practice Tests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trialContent.mockPapers.map((paper, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="font-medium">{paper}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button variant="secondary" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Full course includes {trialContent.mockPapers.length + 10}+ practice papers and tests.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="examples" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Study Examples & Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trialContent.examples.map((example, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="font-medium">{example}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Access hundreds of examples, templates, and study guides in the full course.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center gap-4 pt-6 border-t">
          <Button variant="outline" size="lg">
            Continue with Free Trial
          </Button>
          <Button variant="hero" size="lg">
            Enroll in Full Course
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrialModal;