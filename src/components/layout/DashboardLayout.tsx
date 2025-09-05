import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { TopNavigation } from "./TopNavigation";
import { ChatInterface } from "../chat/ChatInterface";
import { DocumentPanel } from "../documents/DocumentPanel";

export function DashboardLayout() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-gradient-surface">
        <div className="flex h-screen">
          {/* Sidebar */}
          <DashboardSidebar />
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Top Navigation */}
            <TopNavigation onTogglePanel={() => setIsPanelOpen(!isPanelOpen)} />
            
            {/* Content */}
            <div className="flex-1 flex overflow-hidden">
              {/* Chat Interface */}
              <div className={`flex-1 transition-all duration-300 ${isPanelOpen ? 'mr-80' : 'mr-0'}`}>
                <ChatInterface />
              </div>
              
              {/* Document Panel */}
              <DocumentPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}