
import { Settings, BookOpen, Package } from "lucide-react";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: "night" | "day";
  setTheme: (theme: "night" | "day") => void;
}

const socialApps = [
  { name: "Gift", icon: "🎁", color: "bg-red-500" },
  { name: "Zalo", icon: "💬", color: "bg-blue-500" },
  { name: "Discord", icon: "🎮", color: "bg-indigo-600" },
];

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  theme,
  setTheme,
}) => {
  const sidebarItems = [
    { id: "service", icon: Package, label: "Service" },
    { id: "user-guide", icon: BookOpen, label: "User Guide" },
    { id: "setting", icon: Settings, label: "Setting" },
    { id: "app-store", icon: Package, label: "App Store" },
  ];

  return (
    <div className="w-80 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">CentriX</h1>
            <p className="text-gray-400 text-sm">v3.2.0</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6">
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            />
          ))}
        </nav>
      </div>

      {/* Theme Toggle & Actions */}
      <div className="px-4 py-4 border-t border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setTheme("night")}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                theme === "night" ? "bg-gray-700 text-white" : "text-gray-400"
              }`}
            >
              NIGHT
            </button>
            <button
              onClick={() => setTheme("day")}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                theme === "day" ? "bg-indigo-600 text-white" : "text-gray-400"
              }`}
            >
              DAY
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Logout
          </button>
          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Personal center
          </button>
        </div>

        {/* Social Apps */}
        <div className="flex justify-center space-x-2 mt-4">
          {socialApps.map((app, index) => (
            <div
              key={index}
              className={`w-10 h-10 ${app.color} rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform`}
            >
              <span className="text-white text-lg">{app.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
