import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Heart,
  Users,
  MessageCircle,
  TrendingUp,
  Calendar,
  Award,
  BookOpen,
  Lightbulb,
  Star,
  Share2
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CulturalAdvocacy() {
  const dailyInsight = {
    title: "Embracing Diversity in Remote Teams",
    content: "Research shows that diverse teams are 35% more likely to outperform homogeneous teams. Today's focus: Create inclusive virtual spaces where every voice is heard and valued.",
    tips: [
      "Start meetings with personal check-ins",
      "Rotate speaking opportunities",
      "Use diverse communication channels",
      "Celebrate cultural holidays and traditions"
    ],
    impact: "Teams implementing these practices see 23% higher engagement"
  };

  const weeklyGoals = [
    {
      title: "Inclusive Language Training",
      progress: 78,
      participants: 145,
      deadline: "End of week",
      status: "on-track"
    },
    {
      title: "Mentorship Program Launch",
      progress: 92,
      participants: 67,
      deadline: "2 days",
      status: "ahead"
    },
    {
      title: "Cultural Awareness Workshop",
      progress: 45,
      participants: 89,
      deadline: "3 days",
      status: "needs-attention"
    }
  ];

  const achievements = [
    { title: "Diversity Champion", count: 12, icon: "🏆" },
    { title: "Inclusive Leader", count: 8, icon: "👥" },
    { title: "Cultural Bridge", count: 15, icon: "🌉" },
    { title: "Equity Advocate", count: 6, icon: "⚖️" }
  ];

  const resources = [
    {
      title: "Unconscious Bias in Hiring",
      type: "Article",
      readTime: "8 min",
      category: "Training"
    },
    {
      title: "Building Inclusive Teams",
      type: "Video",
      readTime: "15 min",
      category: "Leadership"
    },
    {
      title: "Cultural Competency Guide",
      type: "PDF",
      readTime: "12 min",
      category: "Resources"
    }
  ];

  const getProgressColor = (status: string) => {
    switch (status) {
      case "ahead":
        return "text-green-400";
      case "on-track":
        return "text-blue-400";
      case "needs-attention":
        return "text-orange-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Cultural Advocacy Hub
            </h1>
            <p className="text-muted-foreground mt-2">
              Foster inclusion, celebrate diversity, and build stronger communities
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="glass border-white/20">
              <Share2 className="w-4 h-4 mr-2" />
              Share Insights
            </Button>
            <GradientButton variant="secondary">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Workshop
            </GradientButton>
          </div>
        </div>
      </GlassCard>

      {/* Daily AI Insight */}
      <GlassCard variant="strong" className="p-8" glow>
        <div className="flex items-start gap-6">
          <div className="p-4 rounded-2xl gradient-secondary flex-shrink-0">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">Today's Cultural Insight</h2>
              <Badge className="bg-pink-500/20 text-pink-400">AI Generated</Badge>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-purple-400">{dailyInsight.title}</h3>
            <p className="text-muted-foreground mb-6">{dailyInsight.content}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tips */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  Actionable Tips
                </h4>
                <ul className="space-y-2">
                  {dailyInsight.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Impact */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Expected Impact
                </h4>
                <div className="glass p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">{dailyInsight.impact}</p>
                  <div className="mt-3 flex gap-2">
                    <Badge className="bg-green-500/20 text-green-400">+23% Engagement</Badge>
                    <Badge className="bg-blue-500/20 text-blue-400">Proven Method</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="hidden lg:block w-48 h-48 relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=300&fit=crop"
              alt="Diverse team collaboration"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </GlassCard>

      {/* Weekly Goals Progress */}
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold mb-6">Weekly Cultural Goals</h3>
        <div className="space-y-4">
          {weeklyGoals.map((goal, index) => (
            <div key={index} className="glass p-4 rounded-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold">{goal.title}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{goal.participants} participants</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Due: {goal.deadline}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${getProgressColor(goal.status)}`}>
                    {goal.progress}%
                  </div>
                  <Badge className={`text-xs ${
                    goal.status === "ahead" ? "bg-green-500/20 text-green-400" :
                    goal.status === "on-track" ? "bg-blue-500/20 text-blue-400" :
                    "bg-orange-500/20 text-orange-400"
                  }`}>
                    {goal.status.replace("-", " ")}
                  </Badge>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    goal.status === "ahead" ? "gradient-success" :
                    goal.status === "on-track" ? "gradient-primary" :
                    "gradient-secondary"
                  }`}
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Team Achievements */}
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-6">Team Achievements</h3>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-2xl font-bold text-purple-400 mb-1">{achievement.count}</div>
                <div className="text-sm text-muted-foreground">{achievement.title}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 glass rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">This Month's Champion</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-secondary flex items-center justify-center text-white font-semibold">
                MJ
              </div>
              <div>
                <p className="font-medium">Maria Johnson</p>
                <p className="text-sm text-muted-foreground">Led 3 inclusion workshops</p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Learning Resources */}
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-6">Recommended Resources</h3>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <div key={index} className="glass p-4 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg gradient-accent">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{resource.title}</h4>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <Badge className="bg-blue-500/20 text-blue-400">{resource.type}</Badge>
                      <span>{resource.readTime}</span>
                      <span>•</span>
                      <span>{resource.category}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="glass border-white/20 hover:gradient-primary hover:text-white">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <GradientButton variant="accent" className="w-full mt-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Browse All Resources
          </GradientButton>
        </GlassCard>
      </div>

      {/* Community Engagement */}
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold mb-6">Community Engagement</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="p-4 rounded-2xl gradient-primary w-fit mx-auto mb-3">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">47</div>
            <div className="text-sm text-muted-foreground">Active Discussions</div>
          </div>
          
          <div className="text-center">
            <div className="p-4 rounded-2xl gradient-success w-fit mx-auto mb-3">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">234</div>
            <div className="text-sm text-muted-foreground">Community Members</div>
          </div>
          
          <div className="text-center">
            <div className="p-4 rounded-2xl gradient-secondary w-fit mx-auto mb-3">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-pink-400 mb-1">89%</div>
            <div className="text-sm text-muted-foreground">Positive Feedback</div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}