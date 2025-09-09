import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  Plus,
  Clock,
  Users,
  Sparkles,
  Filter
} from "lucide-react";
import { cn } from "./ui/utils";

interface Event {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: "meeting" | "task" | "deadline" | "break";
  attendees?: number;
  aiSuggested?: boolean;
}

interface DaySchedule {
  date: string;
  events: Event[];
}

export function CalendarView() {
  const [viewMode, setViewMode] = useState<"week" | "month">("week");
  const [currentWeek, setCurrentWeek] = useState(0);

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const currentDate = new Date();
  
  // Mock schedule data
  const weekSchedule: DaySchedule[] = [
    {
      date: "Jan 15",
      events: [
        { id: "1", title: "Team Standup", time: "09:00", duration: "30min", type: "meeting", attendees: 8 },
        { id: "2", title: "Code Review", time: "14:00", duration: "1h", type: "task", aiSuggested: true },
        { id: "3", title: "Client Presentation", time: "16:00", duration: "2h", type: "meeting", attendees: 12 }
      ]
    },
    {
      date: "Jan 16", 
      events: [
        { id: "4", title: "Design Sprint", time: "10:00", duration: "4h", type: "meeting", attendees: 6 },
        { id: "5", title: "Coffee Break", time: "15:00", duration: "15min", type: "break" }
      ]
    },
    {
      date: "Jan 17",
      events: [
        { id: "6", title: "Project Deadline", time: "17:00", duration: "1h", type: "deadline", aiSuggested: true },
        { id: "7", title: "1:1 with Manager", time: "11:00", duration: "45min", type: "meeting", attendees: 2 }
      ]
    },
    {
      date: "Jan 18",
      events: [
        { id: "8", title: "Documentation", time: "13:00", duration: "2h", type: "task" },
        { id: "9", title: "Team Building", time: "18:00", duration: "2h", type: "meeting", attendees: 15 }
      ]
    },
    {
      date: "Jan 19",
      events: [
        { id: "10", title: "Weekly Review", time: "09:00", duration: "1h", type: "meeting", attendees: 5, aiSuggested: true }
      ]
    },
    { date: "Jan 20", events: [] },
    { date: "Jan 21", events: [] }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "task":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "deadline":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "break":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const aiSuggestions = [
    "Schedule focus time for deep work (2-4 PM)",
    "Move morning meetings to afternoon for better productivity",
    "Add 15-min buffer between back-to-back meetings"
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Smart Calendar
            </h1>
            <p className="text-muted-foreground mt-2">
              AI-optimized scheduling with intelligent suggestions
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1 p-1 glass rounded-lg">
              <Button
                variant={viewMode === "week" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("week")}
                className={viewMode === "week" ? "gradient-primary text-white" : ""}
              >
                Week
              </Button>
              <Button
                variant={viewMode === "month" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("month")}
                className={viewMode === "month" ? "gradient-primary text-white" : ""}
              >
                Month
              </Button>
            </div>
            <Button variant="outline" className="bg-slate-700/80 border border-white/20 text-white hover:bg-slate-600/80">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <GradientButton variant="primary">
              <Plus className="w-4 h-4 mr-2" />
              New Event
            </GradientButton>
          </div>
        </div>
      </GlassCard>

      {/* AI Suggestions */}
      <GlassCard className="p-6" glow>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl gradient-accent">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-3">AI Scheduling Suggestions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="glass p-3 rounded-lg hover:scale-105 transition-transform duration-300">
                  <p className="text-sm text-muted-foreground mb-2">{suggestion}</p>
                  <Button size="sm" variant="outline" className="w-full glass border-white/20 hover:gradient-primary hover:text-white">
                    Apply Suggestion
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Week Navigation */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="bg-slate-700/80 border border-white/20 text-white hover:bg-slate-600/80">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-xl font-semibold">January 15 - 21, 2024</h2>
            <Button variant="outline" size="sm" className="bg-slate-700/80 border border-white/20 text-white hover:bg-slate-600/80">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <Badge className="bg-blue-500/20 text-blue-400">Current Week</Badge>
        </div>

        {/* Week View */}
        <div className="grid grid-cols-7 gap-4">
          {weekSchedule.map((day, index) => (
            <div key={index} className="space-y-3">
              {/* Day Header */}
              <div className="text-center">
                <div className="text-sm text-muted-foreground">{weekDays[index]}</div>
                <div className={cn(
                  "text-lg font-semibold mt-1 w-8 h-8 rounded-full flex items-center justify-center mx-auto",
                  index === 0 ? "gradient-primary text-white" : ""
                )}>
                  {day.date.split(' ')[1]}
                </div>
              </div>

              {/* Events */}
              <div className="space-y-2 min-h-[400px]">
                {day.events.map((event) => (
                  <div
                    key={event.id}
                    className={cn(
                      "p-3 rounded-lg border cursor-pointer hover:scale-105 transition-all duration-300",
                      getEventColor(event.type),
                      event.aiSuggested && "glow"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-medium">{event.title}</h4>
                          {event.aiSuggested && (
                            <Sparkles className="w-3 h-3 text-yellow-400" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs opacity-80">
                          <Clock className="w-3 h-3" />
                          <span>{event.time}</span>
                          <span>•</span>
                          <span>{event.duration}</span>
                        </div>
                        {event.attendees && (
                          <div className="flex items-center gap-1 mt-1 text-xs opacity-80">
                            <Users className="w-3 h-3" />
                            <span>{event.attendees} people</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Add Event Button */}
                <button className="w-full p-2 border-2 border-dashed border-white/20 rounded-lg hover:border-white/40 transition-colors duration-300 text-xs text-muted-foreground hover:text-foreground">
                  + Add Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Calendar Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <GlassCard className="p-4 text-center hover:scale-105 transition-transform duration-300">
          <div className="text-2xl font-bold text-blue-400 mb-1">24</div>
          <div className="text-sm text-muted-foreground">Events This Week</div>
        </GlassCard>
        <GlassCard className="p-4 text-center hover:scale-105 transition-transform duration-300">
          <div className="text-2xl font-bold text-purple-400 mb-1">6</div>
          <div className="text-sm text-muted-foreground">AI Suggestions</div>
        </GlassCard>
        <GlassCard className="p-4 text-center hover:scale-105 transition-transform duration-300">
          <div className="text-2xl font-bold text-green-400 mb-1">32h</div>
          <div className="text-sm text-muted-foreground">Scheduled Time</div>
        </GlassCard>
        <GlassCard className="p-4 text-center hover:scale-105 transition-transform duration-300">
          <div className="text-2xl font-bold text-yellow-400 mb-1">8h</div>
          <div className="text-sm text-muted-foreground">Focus Time</div>
        </GlassCard>
      </div>
    </div>
  );
}