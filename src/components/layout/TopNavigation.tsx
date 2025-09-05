import { Bell, Search, ChevronDown, PanelRightOpen, PanelRightClose } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TopNavigationProps {
  onTogglePanel: () => void;
}

export function TopNavigation({ onTogglePanel }: TopNavigationProps) {
  return (
    <header className="h-16 border-b border-border bg-surface-elevated/80 backdrop-blur-sm px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="hover:bg-surface-hover" />
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-text-primary">Legal Assistant</h1>
          <span className="px-2 py-1 bg-accent-blue/10 text-accent-blue text-xs rounded-full font-medium">
            Premium
          </span>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <Input
            placeholder="Search cases, documents, or ask a question..."
            className="pl-10 input-premium"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onTogglePanel}
          className="hover:bg-surface-hover"
        >
          <PanelRightOpen className="w-4 h-4" />
        </Button>
        
        <Button variant="ghost" size="sm" className="relative hover:bg-surface-hover">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-blue rounded-full"></span>
        </Button>

        <div className="flex items-center gap-2 pl-3 border-l border-border">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-xs font-semibold text-text-on-primary">JD</span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-text-primary">John Doe</p>
            <p className="text-xs text-text-secondary">Senior Partner</p>
          </div>
          <ChevronDown className="w-4 h-4 text-text-tertiary" />
        </div>
      </div>
    </header>
  );
}