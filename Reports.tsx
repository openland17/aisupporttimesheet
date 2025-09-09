import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Filter,
  Calendar,
  Users,
  Clock,
  Target
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";

export function Reports() {
  // Mock data for charts
  const productivityData = [
    { month: "Jan", efficiency: 78, accuracy: 94, productivity: 82 },
    { month: "Feb", efficiency: 82, accuracy: 96, productivity: 85 },
    { month: "Mar", efficiency: 85, accuracy: 97, productivity: 88 },
    { month: "Apr", efficiency: 89, accuracy: 98, productivity: 91 },
    { month: "May", efficiency: 92, accuracy: 99, productivity: 94 },
    { month: "Jun", efficiency: 95, accuracy: 99, productivity: 97 }
  ];

  const departmentData = [
    { name: "Engineering", hours: 2400, color: "#667eea" },
    { name: "Design", hours: 1800, color: "#f093fb" },
    { name: "Marketing", hours: 1200, color: "#4facfe" },
    { name: "Sales", hours: 1600, color: "#43e97b" },
    { name: "HR", hours: 800, color: "#ff6b6b" }
  ];

  const costSavingsData = [
    { week: "Week 1", manual: 15000, automated: 8000 },
    { week: "Week 2", manual: 16000, automated: 7500 },
    { week: "Week 3", manual: 14500, automated: 7200 },
    { week: "Week 4", manual: 17000, automated: 6800 }
  ];

  const summaryCards = [
    {
      title: "Total Time Saved",
      value: "1,247 hours",
      change: "+23%",
      trend: "up",
      icon: <Clock className="w-6 h-6 text-white" />,
      gradient: "primary"
    },
    {
      title: "Cost Reduction",
      value: "$89,420",
      change: "+18%", 
      trend: "up",
      icon: <Target className="w-6 h-6 text-white" />,
      gradient: "success"
    },
    {
      title: "Efficiency Gain",
      value: "95%",
      change: "+12%",
      trend: "up", 
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      gradient: "accent"
    },
    {
      title: "Active Users",
      value: "1,847",
      change: "+8%",
      trend: "up",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "secondary"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Analytics & Reports
            </h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive insights into your automation performance
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="glass border-white/20">
              <Calendar className="w-4 h-4 mr-2" />
              Date Range
            </Button>
            <Button variant="outline" className="glass border-white/20">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <GradientButton variant="primary">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </GradientButton>
          </div>
        </div>
      </GlassCard>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <GlassCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{card.title}</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {card.value}
                </p>
                <div className="flex items-center text-sm text-green-400">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>{card.change}</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl gradient-${card.gradient}`}>
                {card.icon}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Productivity Trends */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold">Productivity Trends</h3>
              <p className="text-sm text-muted-foreground">Monthly performance metrics</p>
            </div>
            <Badge className="bg-green-500/20 text-green-400">+15% Growth</Badge>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "rgba(0,0,0,0.8)", 
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#667eea" 
                strokeWidth={3}
                dot={{ fill: "#667eea", strokeWidth: 2, r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="accuracy" 
                stroke="#f093fb" 
                strokeWidth={3}
                dot={{ fill: "#f093fb", strokeWidth: 2, r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="productivity" 
                stroke="#43e97b" 
                strokeWidth={3}
                dot={{ fill: "#43e97b", strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Department Hours */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold">Hours by Department</h3>
              <p className="text-sm text-muted-foreground">Total automated hours</p>
            </div>
            <Badge className="bg-blue-500/20 text-blue-400">8,800 Total</Badge>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={40}
                paddingAngle={5}
                dataKey="hours"
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "rgba(0,0,0,0.8)", 
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px" 
                }} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Cost Savings Chart */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold">Cost Savings Analysis</h3>
            <p className="text-sm text-muted-foreground">Manual vs Automated process costs</p>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-red-500/20 text-red-400">Manual Process</Badge>
            <Badge className="bg-green-500/20 text-green-400">Automated Process</Badge>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={costSavingsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="week" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "rgba(0,0,0,0.8)", 
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "8px" 
              }} 
            />
            <Legend />
            <Bar dataKey="manual" fill="#ff6b6b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="automated" fill="#43e97b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* AI Insights */}
      <GlassCard className="p-6" glow>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl gradient-accent">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-3">AI-Generated Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-medium mb-2">Peak Efficiency Hours</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Your team performs 34% better between 2-4 PM. Consider scheduling important tasks during this window.
                </p>
                <Badge className="bg-blue-500/20 text-blue-400">Actionable</Badge>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-medium mb-2">Cost Optimization</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Automating the approval process could save an additional $12,000 monthly based on current patterns.
                </p>
                <Badge className="bg-green-500/20 text-green-400">High Impact</Badge>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}