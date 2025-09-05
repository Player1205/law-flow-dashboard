import { FileText, Star, Clock, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mockCases = [
  {
    id: '1',
    title: 'Smith v. Johnson Employment Dispute',
    status: 'Active',
    lastActivity: '2 hours ago',
    priority: 'High',
    starred: true,
  },
  {
    id: '2',
    title: 'Acme Corp Contract Negotiation',
    status: 'In Review',
    lastActivity: '1 day ago',
    priority: 'Medium',
    starred: false,
  },
  {
    id: '3',
    title: 'Intellectual Property Filing',
    status: 'Completed',
    lastActivity: '3 days ago',
    priority: 'Low',
    starred: true,
  },
];

const Cases = () => {
  return (
    <div className="h-full p-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Saved Cases</h1>
            <p className="text-text-secondary">Manage your legal cases and documents</p>
          </div>
          <Button className="bg-gradient-primary hover:bg-primary-hover">
            <FileText className="w-4 h-4 mr-2" />
            New Case
          </Button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-tertiary" />
            <Input
              placeholder="Search cases..."
              className="pl-10 input-premium"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="grid gap-4">
          {mockCases.map((case_) => (
            <div
              key={case_.id}
              className="card-premium p-6 hover-lift cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                      {case_.title}
                    </h3>
                    {case_.starred && (
                      <Star className="w-4 h-4 text-accent-blue fill-current" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      case_.status === 'Active' ? 'bg-accent-blue/10 text-accent-blue' :
                      case_.status === 'In Review' ? 'bg-warning/10 text-warning' :
                      'bg-success/10 text-success'
                    }`}>
                      {case_.status}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {case_.lastActivity}
                    </span>
                    <span className="text-text-tertiary">
                      Priority: {case_.priority}
                    </span>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;