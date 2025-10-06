// Type cho service
export interface Service {
  id: number;
  name: string;
  icon: string; // emoji
  expireDate: string;
  status: "active" | "limited";
  usage?: string; // chỉ tồn tại khi status === 'limited'
  bgColor: string; // Tailwind CSS color class
}

// Dữ liệu services
export const services: Service[] = [
  {
    id: 1,
    name: "Canva Pro",
    icon: "🎨",
    expireDate: "21-09-2025",
    status: "active",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Capcut Pro",
    icon: "✂️",
    expireDate: "21-09-2025",
    status: "active",
    bgColor: "bg-gray-800",
  },
  {
    id: 3,
    name: "Envato Elements",
    icon: "🌿",
    expireDate: "24-08-2025",
    status: "limited",
    usage: "0/30",
    bgColor: "bg-green-500",
  },
  {
    id: 4,
    name: "Gamma Pro",
    icon: "🔥",
    expireDate: "21-09-2025",
    status: "active",
    bgColor: "bg-purple-500",
  },
  {
    id: 5,
    name: "Grammarly Pro",
    icon: "📝",
    expireDate: "21-09-2025",
    status: "active",
    bgColor: "bg-green-600",
  },
  {
    id: 6,
    name: "InVideo Studio Premium",
    icon: "🎬",
    expireDate: "21-09-2025",
    status: "active",
    bgColor: "bg-blue-600",
  },
];

// Type cho social app
export interface SocialApp {
  name: string;
  icon: string;
  color: string;
}

// Dữ liệu socialApps
export const socialApps: SocialApp[] = [
  { name: "Gift", icon: "🎁", color: "bg-red-500" },
  { name: "Zalo", icon: "💬", color: "bg-blue-500" },
  { name: "Discord", icon: "🎮", color: "bg-indigo-600" },
];

// Type cho sidebar item
export interface SidebarItem {
  id: string;
  label: string;
}

// Dữ liệu sidebarItems
export const sidebarItems: SidebarItem[] = [
  { id: "service", label: "Service" },
  { id: "user-guide", label: "User Guide" },
  { id: "setting", label: "Setting" },
  { id: "app-store", label: "App Store" },
];
