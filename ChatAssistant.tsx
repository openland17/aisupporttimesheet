import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  MessageCircle, 
  Send, 
  Minimize2, 
  Maximize2,
  Bot,
  User,
  Sparkles
} from "lucide-react";
import { cn } from "./ui/utils";

interface Message {
  id: string;
  content: string;
  type: "user" | "ai";
  timestamp: Date;
}

export function ChatAssistant() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI automation assistant. How can I help you optimize your workflow today?",
      type: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    "Analyze performance",
    "Create automation",
    "View reports",
    "Schedule tasks"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand you want to " + inputValue.toLowerCase() + ". Let me help you with that. I can provide detailed analytics and suggestions for optimization.",
        type: "ai",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
    handleSendMessage();
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="w-16 h-16 rounded-full gradient-primary text-white shadow-lg hover:scale-110 transition-transform duration-300 glow"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px]">
      <div className="glass-chat rounded-2xl h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg gradient-primary">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs text-muted-foreground">Always ready to help</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(true)}
            className="text-muted-foreground hover:text-foreground"
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-3",
                message.type === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "p-2 rounded-lg",
                message.type === "user" ? "gradient-secondary" : "gradient-primary"
              )}>
                {message.type === "user" ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div
                className={cn(
                  "max-w-[70%] p-3 rounded-2xl",
                  message.type === "user" 
                    ? "gradient-primary text-white ml-auto" 
                    : "bg-slate-800/90 text-white border border-white/10"
                )}
              >
                <p className="text-sm">{message.content}</p>
                {message.type === "ai" && (
                  <div className="flex items-center gap-1 mt-2 text-xs opacity-70">
                    <Sparkles className="w-3 h-3" />
                    <span>AI Response</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg gradient-primary">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-800/90 p-3 rounded-2xl border border-white/10">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-white/20">
          <p className="text-xs text-muted-foreground mb-2">Quick Actions:</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {quickActions.map((action) => (
              <button
                key={action}
                onClick={() => handleQuickAction(action)}
                className="px-3 py-1 text-xs rounded-full bg-slate-700/80 text-slate-200 border border-white/10 hover:gradient-primary hover:text-white transition-all duration-300"
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/20">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-slate-700/80 border border-white/10 text-white placeholder:text-slate-400"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <GradientButton
              onClick={handleSendMessage}
              size="sm"
              disabled={!inputValue.trim()}
            >
              <Send className="w-4 h-4" />
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}