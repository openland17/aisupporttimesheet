import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { ChatAssistant } from "./components/ChatAssistant";
import { Timesheet } from "./components/Timesheet";
import { CalendarView } from "./components/CalendarView";
import { Reports } from "./components/Reports";
import { Profile } from "./components/Profile";
import { Compliance } from "./components/Compliance";
import { CulturalAdvocacy } from "./components/CulturalAdvocacy";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "timesheet":
        return <Timesheet />;
      case "calendar":
        return <CalendarView />;
      case "reports":
        return <Reports />;
      case "profile":
        return <Profile />;
      case "compliance":
        return <Compliance />;
      case "advocacy":
        return <CulturalAdvocacy />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>

      {/* Floating Chat Assistant */}
      <ChatAssistant />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "6s" }}></div>
      </div>
    </div>
  );
}