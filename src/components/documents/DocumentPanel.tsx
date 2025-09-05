import { useState } from "react";
import { X, FileText, Download, Share, Star, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DocumentPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const savedChats = [
  {
    id: '1',
    title: 'Employment Contract Review',
    date: '2024-01-15',
    preview: 'Analysis of non-compete clauses and severance terms...',
    starred: true,
  },
  {
    id: '2',
    title: 'Merger Due Diligence',
    date: '2024-01-14',
    preview: 'Discussion about NDA implications and regulatory compliance...',
    starred: false,
  },
  {
    id: '3',
    title: 'Intellectual Property Rights',
    date: '2024-01-12',
    preview: 'Trademark registration process and patent considerations...',
    starred: true,
  },
];

const documents = [
  {
    id: '1',
    name: 'Contract_Analysis_Report.pdf',
    type: 'PDF',
    size: '2.4 MB',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'Legal_Research_Summary.docx',
    type: 'DOCX',
    size: '1.8 MB',
    date: '2024-01-14',
  },
  {
    id: '3',
    name: 'Case_Law_Citations.txt',
    type: 'TXT',
    size: '0.5 MB',
    date: '2024-01-12',
  },
];

export function DocumentPanel({ isOpen, onClose }: DocumentPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-16 bottom-0 w-80 bg-surface-elevated border-l border-border animate-scale-in">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-text-primary">Workspace</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-surface-hover"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-tertiary" />
            <Input
              placeholder="Search chats and documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 input-premium"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <Tabs defaultValue="chats" className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-2 m-4 mb-0">
              <TabsTrigger value="chats">Saved Chats</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="chats" className="flex-1 overflow-y-auto p-4 space-y-3">
              {savedChats.map((chat) => (
                <div
                  key={chat.id}
                  className="card-premium p-4 hover-lift cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-text-primary text-sm group-hover:text-accent-blue transition-colors">
                      {chat.title}
                    </h4>
                    <div className="flex items-center gap-1">
                      {chat.starred && (
                        <Star className="w-3 h-3 text-accent-blue fill-current" />
                      )}
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Share className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-xs mb-3 line-clamp-2">
                    {chat.preview}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-text-tertiary">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {chat.date}
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Open
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="documents" className="flex-1 overflow-y-auto p-4 space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="card-premium p-4 hover-lift cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-accent-blue" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-text-primary text-sm mb-1 truncate group-hover:text-accent-blue transition-colors">
                        {doc.name}
                      </h4>
                      <p className="text-text-secondary text-xs mb-2">
                        {doc.type} • {doc.size}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-text-tertiary text-xs">{doc.date}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity h-6 px-2"
                        >
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <Button className="w-full bg-gradient-primary hover:bg-primary-hover btn-premium">
            <FileText className="w-4 h-4 mr-2" />
            Export Chat
          </Button>
        </div>
      </div>
    </div>
  );
}