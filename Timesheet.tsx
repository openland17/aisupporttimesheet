import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";
import { 
  Calendar,
  Clock,
  Edit3,
  Check,
  X,
  Plus,
  Filter,
  Download
} from "lucide-react";
import { cn } from "./ui/utils";

interface ShiftEntry {
  id: string;
  employee: string;
  date: string;
  startTime: string;
  endTime: string;
  hours: number;
  status: "pending" | "approved" | "rejected";
  department: string;
}

export function Timesheet() {
  const [shifts, setShifts] = useState<ShiftEntry[]>([
    {
      id: "1",
      employee: "Sarah Johnson",
      date: "2024-01-15",
      startTime: "09:00",
      endTime: "17:00",
      hours: 8,
      status: "pending",
      department: "Engineering"
    },
    {
      id: "2", 
      employee: "Mike Chen",
      date: "2024-01-15",
      startTime: "10:00",
      endTime: "18:00",
      hours: 8,
      status: "approved",
      department: "Design"
    },
    {
      id: "3",
      employee: "Emily Davis",
      date: "2024-01-15",
      startTime: "08:30",
      endTime: "16:30",
      hours: 8,
      status: "pending",
      department: "Marketing"
    },
    {
      id: "4",
      employee: "James Wilson",
      date: "2024-01-15",
      startTime: "11:00",
      endTime: "19:00",
      hours: 8,
      status: "rejected",
      department: "Sales"
    }
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [approvalSlider, setApprovalSlider] = useState<{ [key: string]: number }>({});

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleSave = (id: string) => {
    setEditingId(null);
  };

  const handleApprovalSlider = (id: string, value: number[]) => {
    setApprovalSlider(prev => ({ ...prev, [id]: value[0] }));
    
    // Auto-update status based on slider value
    const newStatus = value[0] < 30 ? "rejected" : value[0] > 70 ? "approved" : "pending";
    setShifts(prev => prev.map(shift => 
      shift.id === id ? { ...shift, status: newStatus } : shift
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "rejected":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    }
  };

  const getDepartmentColor = (department: string) => {
    const colors: { [key: string]: string } = {
      "Engineering": "gradient-primary",
      "Design": "gradient-secondary", 
      "Marketing": "gradient-accent",
      "Sales": "gradient-success"
    };
    return colors[department] || "gradient-primary";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Timesheet Management
            </h1>
            <p className="text-muted-foreground mt-2">
              Review and approve employee shift entries with AI-powered insights
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
              <Plus className="w-4 h-4 mr-2" />
              Add Entry
            </GradientButton>
          </div>
        </div>
      </GlassCard>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <GlassCard className="p-4 text-center">
          <div className="text-2xl font-bold text-green-400">12</div>
          <div className="text-sm text-muted-foreground">Approved Today</div>
        </GlassCard>
        <GlassCard className="p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">8</div>
          <div className="text-sm text-muted-foreground">Pending Review</div>
        </GlassCard>
        <GlassCard className="p-4 text-center">
          <div className="text-2xl font-bold text-red-400">2</div>
          <div className="text-sm text-muted-foreground">Rejected</div>
        </GlassCard>
        <GlassCard className="p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">176</div>
          <div className="text-sm text-muted-foreground">Total Hours</div>
        </GlassCard>
      </div>

      {/* Timesheet Table */}
      <GlassCard className="p-6">
        <div className="space-y-4">
          {shifts.map((shift) => (
            <div key={shift.id} className="bg-slate-800/60 border border-white/10 p-4 rounded-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
                {/* Employee */}
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white text-sm", getDepartmentColor(shift.department))}>
                    {shift.employee.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium">{shift.employee}</div>
                    <div className="text-xs text-muted-foreground">{shift.department}</div>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{shift.date}</span>
                </div>

                {/* Time Range */}
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  {editingId === shift.id ? (
                    <div className="flex gap-1">
                      <Input 
                        type="time" 
                        defaultValue={shift.startTime}
                        className="w-20 h-8 text-xs bg-slate-700/80 border border-white/20 text-white"
                      />
                      <span className="text-xs">-</span>
                      <Input 
                        type="time" 
                        defaultValue={shift.endTime}
                        className="w-20 h-8 text-xs bg-slate-700/80 border border-white/20 text-white"
                      />
                    </div>
                  ) : (
                    <span className="text-sm">{shift.startTime} - {shift.endTime}</span>
                  )}
                </div>

                {/* Hours */}
                <div className="text-center">
                  {editingId === shift.id ? (
                    <Input 
                      type="number" 
                      defaultValue={shift.hours}
                      className="w-16 h-8 text-xs text-center bg-slate-700/80 border border-white/20 text-white"
                    />
                  ) : (
                    <div className="text-sm font-medium">{shift.hours}h</div>
                  )}
                </div>

                {/* Status */}
                <div>
                  <Badge className={cn("text-xs", getStatusColor(shift.status))}>
                    {shift.status.charAt(0).toUpperCase() + shift.status.slice(1)}
                  </Badge>
                </div>

                {/* Approval Slider */}
                <div className="px-2">
                  <Slider
                    value={[approvalSlider[shift.id] || (shift.status === "approved" ? 100 : shift.status === "rejected" ? 0 : 50)]}
                    onValueChange={(value) => handleApprovalSlider(shift.id, value)}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Reject</span>
                    <span>Approve</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {editingId === shift.id ? (
                    <>
                      <Button 
                        size="sm" 
                        onClick={() => handleSave(shift.id)}
                        className="gradient-success text-white"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setEditingId(null)}
                        className="bg-slate-700/80 border border-white/20 text-white hover:bg-slate-600/80"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleEdit(shift.id)}
                      className="glass border-white/20 hover:gradient-primary hover:text-white transition-all duration-300"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* AI Insights */}
      <GlassCard className="p-6" glow>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl gradient-primary">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">AI Insights</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Based on historical patterns, I've detected that Sarah Johnson typically works 8.2 hours on Mondays. 
              The current entry aligns with her usual schedule.
            </p>
            <div className="flex gap-2">
              <Badge className="bg-green-500/20 text-green-400">Pattern Match</Badge>
              <Badge className="bg-blue-500/20 text-blue-400">Normal Hours</Badge>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}