import { StatCard } from "./StatCard";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { 
  Clock, 
  TrendingUp, 
  Target, 
  DollarSign, 
  Shield, 
  Users,
  Zap,
  BarChart3
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <GlassCard variant="strong" className="p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
            AI-Powered Automation Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your workflow with intelligent automation that saves time, reduces errors, and boosts productivity.
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <GradientButton variant="primary" glow>
              View Analytics
            </GradientButton>
            <GradientButton variant="secondary">
              Start Automation
            </GradientButton>
          </div>
        </div>
      </GlassCard>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Hours Saved This Week"
          value="247"
          change="+23% from last week"
          trend="up"
          icon={<Clock className="w-6 h-6 text-white" />}
          gradient="primary"
        />
        <StatCard
          title="Errors Reduced"
          value="89%"
          change="+12% improvement"
          trend="up"
          icon={<Shield className="w-6 h-6 text-white" />}
          gradient="success"
        />
        <StatCard
          title="Cost Savings"
          value="$45,320"
          change="+18% this month"
          trend="up"
          icon={<DollarSign className="w-6 h-6 text-white" />}
          gradient="accent"
        />
        <StatCard
          title="Active Users"
          value="1,247"
          change="+8% growth"
          trend="up"
          icon={<Users className="w-6 h-6 text-white" />}
          gradient="secondary"
        />
      </div>

      {/* Interactive Performance Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl gradient-primary">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Efficiency</h3>
              <p className="text-sm text-muted-foreground">Workflow optimization</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Task Completion</span>
              <span className="text-sm font-medium">94%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="gradient-primary h-2 rounded-full" style={{ width: "94%" }}></div>
            </div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </div>
        </GlassCard>

        <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl gradient-success">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Accuracy</h3>
              <p className="text-sm text-muted-foreground">Error reduction</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Accuracy Rate</span>
              <span className="text-sm font-medium">98.7%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="gradient-success h-2 rounded-full" style={{ width: "98.7%" }}></div>
            </div>
            <p className="text-xs text-muted-foreground">+3.2% improvement</p>
          </div>
        </GlassCard>

        <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl gradient-accent">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Productivity</h3>
              <p className="text-sm text-muted-foreground">Output metrics</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Tasks/Hour</span>
              <span className="text-sm font-medium">156</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="gradient-accent h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <p className="text-xs text-muted-foreground">+28% increase</p>
          </div>
        </GlassCard>
      </div>

      {/* Time Saved Live Metric */}
      <GlassCard variant="strong" className="p-8" glow>
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 p-4 rounded-2xl gradient-primary text-white">
            <BarChart3 className="w-8 h-8" />
            <div>
              <p className="text-sm opacity-90">Time Saved This Week</p>
              <p className="text-3xl font-bold animate-pulse-glow">247.3 hours</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            Your AI automation is running smoothly and saving significant time across all departments.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}