import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Settings,
  Bell,
  Shield,
  Activity,
  Award,
  Edit3
} from "lucide-react";

export function Profile() {
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    role: "Senior Product Manager",
    department: "Engineering",
    joinDate: "January 15, 2022",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face"
  };

  const activityLog = [
    { action: "Approved timesheet for John Doe", time: "2 hours ago", type: "approval" },
    { action: "Created automation workflow", time: "5 hours ago", type: "creation" },
    { action: "Generated monthly report", time: "1 day ago", type: "report" },
    { action: "Updated profile settings", time: "2 days ago", type: "settings" },
    { action: "Completed AI training module", time: "3 days ago", type: "training" }
  ];

  const achievements = [
    { title: "Automation Expert", description: "Created 50+ workflows", icon: "🤖" },
    { title: "Time Saver", description: "Saved 1000+ hours", icon: "⏰" },
    { title: "Team Leader", description: "Led 5 successful projects", icon: "👥" },
    { title: "Innovation Champion", description: "Implemented AI solutions", icon: "💡" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "approval":
        return <Shield className="w-4 h-4 text-green-400" />;
      case "creation":
        return <Settings className="w-4 h-4 text-blue-400" />;
      case "report":
        return <Activity className="w-4 h-4 text-purple-400" />;
      case "settings":
        return <User className="w-4 h-4 text-yellow-400" />;
      case "training":
        return <Award className="w-4 h-4 text-orange-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              User Profile
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your account settings and preferences
            </p>
          </div>
          <GradientButton variant="primary">
            <Edit3 className="w-4 h-4 mr-2" />
            Edit Profile
          </GradientButton>
        </div>
      </GlassCard>

      {/* Profile Banner */}
      <GlassCard variant="strong" className="p-8">
        <div className="flex items-start gap-8">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-white/20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-2xl gradient-primary text-white">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-3xl font-bold">{user.name}</h2>
              <p className="text-lg text-muted-foreground">{user.role}</p>
              <Badge className="mt-2 gradient-primary text-white border-0">
                {user.department}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">{user.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">{user.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">Joined {user.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Settings & Preferences */}
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">AI Suggestions</p>
                  <p className="text-sm text-muted-foreground">Get intelligent recommendations</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-approve Timesheets</p>
                  <p className="text-sm text-muted-foreground">Automatically approve standard entries</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Use dark theme</p>
                </div>
                <Switch />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold mb-6">Security</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Change Password</label>
                <Input 
                  type="password" 
                  placeholder="Current password"
                  className="mt-2 glass border-white/20"
                />
              </div>
              <div>
                <Input 
                  type="password" 
                  placeholder="New password"
                  className="glass border-white/20"
                />
              </div>
              <div>
                <Input 
                  type="password" 
                  placeholder="Confirm new password"
                  className="glass border-white/20"
                />
              </div>
              <GradientButton variant="secondary" size="sm">
                Update Password
              </GradientButton>
            </div>
          </GlassCard>
        </div>

        {/* Activity & Achievements */}
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {activityLog.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 glass rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="p-2 rounded-lg bg-white/10">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold mb-6">Achievements</h3>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <h4 className="font-medium text-sm">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}