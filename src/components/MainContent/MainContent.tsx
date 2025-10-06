
import { BookOpen, Settings, Package } from "lucide-react";
import ServiceCard from "../ServiceCard/ServiceCard";
import TrialSection from "../TrialSection/TrialSection";
import { services, Service } from "../../data/services";

interface MainContentProps {
  activeTab: string;
  searchQuery: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab, searchQuery }) => {
  const filteredServices = services.filter((service: Service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderContent = () => {
    switch (activeTab) {
      case "service":
        return (
          <>
            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {filteredServices.map((service: Service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Trial Section */}
            <TrialSection />
          </>
        );

      case "user-guide":
        return (
          <div className="text-center py-20">
            <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">User Guide</h2>
            <p className="text-gray-400">
              Documentation and tutorials will be available here
            </p>
          </div>
        );

      case "setting":
        return (
          <div className="text-center py-20">
            <Settings size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Settings</h2>
            <p className="text-gray-400">Application settings and preferences</p>
          </div>
        );

      case "app-store":
        return (
          <div className="text-center py-20">
            <Package size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">App Store</h2>
            <p className="text-gray-400">Browse and install new applications</p>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="flex-1 overflow-y-auto p-6">{renderContent()}</div>;
};

export default MainContent;
