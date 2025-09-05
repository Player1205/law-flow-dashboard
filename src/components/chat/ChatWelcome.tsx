import { Scale, FileText, Search, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickActions = [
  {
    icon: FileText,
    title: "Contract Review",
    description: "Analyze contracts and legal documents",
    action: "Review my contract for potential issues"
  },
  {
    icon: Search,
    title: "Case Research",
    description: "Research legal precedents and case law",
    action: "Find cases related to employment law"
  },
  {
    icon: MessageCircle,
    title: "Legal Advice",
    description: "Get guidance on legal matters",
    action: "What are my rights in this situation?"
  },
  {
    icon: Zap,
    title: "Quick Question",
    description: "Ask any legal question",
    action: "Explain intellectual property basics"
  }
];

export function ChatWelcome() {
  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
      <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
        <Scale className="w-8 h-8 text-text-on-primary" />
      </div>
      
      <h2 className="text-2xl font-bold text-text-primary mb-3">
        Welcome to LegalAI Assistant
      </h2>
      
      <p className="text-text-secondary mb-8 text-lg">
        Your intelligent legal companion. Ask questions, analyze documents, 
        or get guidance on complex legal matters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className="h-auto p-4 card-premium hover-lift text-left justify-start group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-3 w-full">
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue/20 transition-colors duration-200">
                <action.icon className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-text-primary text-sm mb-1">
                  {action.title}
                </h3>
                <p className="text-text-secondary text-xs">
                  {action.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      <div className="bg-surface-muted rounded-xl p-6 text-left">
        <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-accent-blue" />
          Recent Capabilities
        </h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li>• Advanced contract analysis and risk assessment</li>
          <li>• Real-time legal research and case law citations</li>
          <li>• Compliance checking and regulatory guidance</li>
          <li>• Document drafting and template generation</li>
        </ul>
      </div>
    </div>
  );
}