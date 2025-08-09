import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TestInfo {
  title: string;
  description: string;
  format?: string;
  sections?: string;
  duration?: string;
  score?: string;
  validity?: string;
  recognition?: string;
  features?: string[];
}

interface TestInfoModalProps extends TestInfo {
  isOpen: boolean;
  onClose: () => void;
}

export default function TestInfoModal({
  isOpen,
  onClose,
  ...testInfo
}: TestInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {testInfo.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <p className="text-muted-foreground">{testInfo.description}</p>

          {testInfo.sections && (
            <div className="space-y-1">
              <h4 className="font-semibold">Test Sections</h4>
              <p className="text-sm text-muted-foreground">
                {testInfo.sections}
              </p>
            </div>
          )}

          {testInfo.duration && (
            <div className="space-y-1">
              <h4 className="font-semibold">Duration</h4>
              <p className="text-sm text-muted-foreground">
                {testInfo.duration}
              </p>
            </div>
          )}

          {testInfo.score && (
            <div className="space-y-1">
              <h4 className="font-semibold">Scoring</h4>
              <p className="text-sm text-muted-foreground">{testInfo.score}</p>
            </div>
          )}

          {testInfo.validity && (
            <div className="space-y-1">
              <h4 className="font-semibold">Score Validity</h4>
              <p className="text-sm text-muted-foreground">
                {testInfo.validity}
              </p>
            </div>
          )}

          {testInfo.recognition && (
            <div className="space-y-1">
              <h4 className="font-semibold">Recognition</h4>
              <p className="text-sm text-muted-foreground">
                {testInfo.recognition}
              </p>
            </div>
          )}

          {testInfo.features && testInfo.features.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold">Key Features</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {testInfo.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
