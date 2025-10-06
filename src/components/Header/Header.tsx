import { Search, User, Gift } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 px-6 py-4 shadow-xl">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Search Section */}
        <div className="flex-1 max-w-2xl">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/60 backdrop-blur-sm text-white pl-10 pr-4 py-3 rounded-2xl border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-slate-400 hover:bg-slate-800/80"
            />
          </div>
        </div>

        {/* User Profile Section */}
        <div className="ml-6 flex items-center space-x-4">
          <div className="text-right">
            <p className="text-slate-300 text-sm font-medium">Võ Thế Công</p>
            <div className="flex items-center justify-end space-x-2 mt-1">
              <span className="text-white font-bold text-lg">0</span>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 transition-shadow">
                <User size={18} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Banner */}
      <div className="mt-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl flex items-center space-x-3 shadow-lg hover:shadow-indigo-500/25 transition-shadow">
          <Gift size={20} className="text-indigo-200" />
          <span className="font-medium">
            🎉 CentriX tặng 300 suất trải nghiệm miễn phí ChatGPT Pro
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;