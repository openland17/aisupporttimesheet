import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Calendar,
  Users,
  TrendingUp,
  Filter,
  Download
} from "lucide-react";
import { cn } from "./ui/utils";

interface ComplianceItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "completed" | "pending" | "overdue" | "urgent";
  progress: number;
  assignee: string;
  category: "audit" | "deadline" | "alert" | "review";
}

export function Compliance() {
  const complianceItems: ComplianceItem[] = [
    {
      id: "1",
      title: "Annual Security Audit",
      description: "Complete comprehensive security review and documentation",
      dueDate: "2024-02-15",
      status: "pending",
      progress: 75,
      assignee: "Security Team",
      category: "audit"
    },
    {
      id: "2",
      title: "GDPR Data Review",
      description: "Review and update data protection measures",
      dueDate: "2024-01-20",
      status: "overdue",
      progress: 30,
      assignee: "Legal Team",
      category: "deadline"
    },
    {
      id: "3",
      title: "Employee Training Completion",
      description: "Ensure all staff complete mandatory compliance training",
      dueDate: "2024-01-25",
      status: "urgent",
      progress: 85,
      assignee: "HR Department",
      category: "alert"
    },
    {
      id: "4",
      title: "ISO 27001 Certification",
      description: "Maintain ISO certification standards",
      dueDate: "2024-03-01",
      status: "completed",
      progress: 100,
      assignee: "Quality Team",
      category: "audit"
    },
    {
      id: "5",
      title: "Financial Audit Preparation",
      description: "Prepare documentation for external audit",
      dueDate: "2024-02-10",
      status: "pending",
      progress: 60,
      assignee: "Finance Team",
      category: "review"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "pending":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "overdue":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "urgent":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "audit":
        return <Shield className="w-5 h-5" />;
      case "deadline":
        return <Clock className="w-5 h-5" />;
      case "alert":
        return <AlertTriangle className="w-5 h-5" />;
      case "review":
        return <FileText className="w-5 h-5" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const overallProgress = complianceItems.reduce((acc, item) => acc + item.progress, 0) / complianceItems.length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Compliance & Alerts
            </h1>
            <p className="text-muted-foreground mt-2">
              Monitor deadlines, audits, and regulatory requirements
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="glass border-white/20">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="glass border-white/20">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <GradientButton variant="primary">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Review
            </GradientButton>
          </div>
        </div>
      </GlassCard>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <GlassCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="p-3 rounded-xl gradient-success w-fit mx-auto mb-3">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">4</div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </GlassCard>
        
        <GlassCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="p-3 rounded-xl gradient-primary w-fit mx-auto mb-3">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-blue-400 mb-1">2</div>
          <div className="text-sm text-muted-foreground">Pending</div>
        </GlassCard>

        <GlassCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="p-3 rounded-xl gradient-secondary w-fit mx-auto mb-3">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-orange-400 mb-1">1</div>
          <div className="text-sm text-muted-foreground">Urgent</div>
        </GlassCard>

        <GlassCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="p-3 rounded-xl gradient-accent w-fit mx-auto mb-3">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-teal-400 mb-1">{Math.round(overallProgress)}%</div>
          <div className="text-sm text-muted-foreground">Overall Progress</div>
        </GlassCard>
      </div>

      {/* Overall Progress */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Compliance Progress</h3>
          <Badge className="bg-blue-500/20 text-blue-400">{Math.round(overallProgress)}% Complete</Badge>
        </div>
        <Progress value={overallProgress} className="h-3 mb-2" />
        <p className="text-sm text-muted-foreground">
          Overall compliance progress across all active requirements
        </p>
      </GlassCard>

      {/* Timeline View */}
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold mb-6">Compliance Timeline</h3>
        <div className="space-y-6">
          {complianceItems.map((item, index) => {
            const daysLeft = getDaysUntilDue(item.dueDate);
            const isOverdue = daysLeft < 0;
            const isUrgent = daysLeft <= 7 && daysLeft >= 0;

            return (
              <div key={item.id} className="relative">
                {/* Timeline Line */}
                {index < complianceItems.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-purple-600"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Icon */}
                  <div className={cn(
                    "p-3 rounded-xl flex-shrink-0",
                    item.status === "completed" ? "gradient-success" :
                    item.status === "overdue" ? "gradient-secondary" :
                    item.status === "urgent" ? "bg-orange-500" : "gradient-primary"
                  )}>
                    {getCategoryIcon(item.category)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold">{item.title}</h4>
                          <Badge className={cn("text-xs", getStatusColor(item.status))}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>Due: {item.dueDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span>{item.assignee}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className={cn(
                              isOverdue ? "text-red-400" :
                              isUrgent ? "text-orange-400" : "text-muted-foreground"
                            )}>
                              {isOverdue ? `${Math.abs(daysLeft)} days overdue` :
                               daysLeft === 0 ? "Due today" :
                               `${daysLeft} days left`}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-400">{item.progress}%</div>
                          <div className="text-xs text-muted-foreground">Complete</div>
                        </div>
                        <Progress value={item.progress} className="w-24 h-2" />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <GradientButton variant="primary" size="sm">
                        View Details
                      </GradientButton>
                      {item.status !== "completed" && (
                        <Button variant="outline" size="sm" className="glass border-white/20">
                          Update Progress
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* AI Compliance Insights */}
      <GlassCard className="p-6" glow>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl gradient-accent">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-3">AI Compliance Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-orange-400">Risk Alert</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  GDPR Data Review is overdue. This could impact compliance status and result in potential penalties.
                </p>
                <Badge className="bg-red-500/20 text-red-400">High Priority</Badge>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-green-400">Recommendation</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Consider scheduling quarterly reviews to maintain consistent compliance and avoid last-minute rushes.
                </p>
                <Badge className="bg-blue-500/20 text-blue-400">Process Improvement</Badge>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}