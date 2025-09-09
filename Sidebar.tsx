import { cn } from "./ui/utils";
import { 
  Home,
  MessageSquare,
  Clock,
  Calendar,
  BarChart3,
  User,
  Shield,
  Heart,
  Settings,
  HelpCircle,
  LogOut
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "timesheet", label: "Timesheet", icon: Clock },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "profile", label: "Profile", icon: User },
    { id: "compliance", label: "Compliance", icon: Shield },
    { id: "advocacy", label: "Cultural Advocacy", icon: Heart }
  ];

  const bottomItems = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "help", label: "Help", icon: HelpCircle },
    { id: "logout", label: "Logout", icon: LogOut }
  ];

  return (
    <div className="w-64 h-screen glass-sidebar flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">AutoFlow</h1>
            <p className="text-xs text-muted-foreground">AI Automation Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left",
                activeTab === item.id
                  ? "gradient-primary text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/10"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Chat Toggle */}
      <div className="p-4 border-t border-white/20">
        <button
          onClick={() => onTabChange("chat")}
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left",
            activeTab === "chat"
              ? "gradient-secondary text-white shadow-lg"
              : "text-muted-foreground hover:text-foreground hover:bg-white/10"
          )}
        >
          <MessageSquare className="w-5 h-5" />
          <span className="font-medium">AI Assistant</span>
          <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </button>
      </div>

      {/* Bottom Items */}
      <div className="p-4 border-t border-white/20 space-y-2">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300 text-left"
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}