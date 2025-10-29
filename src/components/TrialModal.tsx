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

  const handlePreview = (itemName: string) => {
    // Prevent default behavior and show alert for demo
    alert(`Preview functionality for "${itemName}" will be implemented soon!`);
  };

  const handleDownload = (itemName: string) => {
    // Prevent default behavior and show alert for demo
    alert(`Download functionality for "${itemName}" will be implemented soon!`);
  };

  const handleView = (itemName: string) => {
    // Prevent default behavior and show alert for demo
    alert(`View functionality for "${itemName}" will be implemented soon!`);
  };

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
                  {trialContent?.videoUrl ? (
                    <iframe
                      src={trialContent.videoUrl}
                      title="Course Sample Video"
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="text-center p-8">
                      <Play className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">Sample video coming soon</p>
                    </div>
                  )}
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
                  {trialContent?.mockPapers && trialContent.mockPapers.length > 0 ? (
                    trialContent.mockPapers.map((paper, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-primary" />
                          <span className="font-medium">{paper}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handlePreview(paper)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Preview
                          </Button>
                          <Button 
                            variant="secondary" 
                            size="sm"
                            onClick={() => handleDownload(paper)}
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center p-8">
                      <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">Mock papers will be available soon</p>
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Full course includes {(trialContent?.mockPapers?.length || 0) + 10}+ practice papers and tests.
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
                  {trialContent?.examples && trialContent.examples.length > 0 ? (
                    trialContent.examples.map((example, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="font-medium">{example}</span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleView(example)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center p-8">
                      <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">Study examples will be available soon</p>
                    </div>
                  )}
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