import { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-slate-800/70 backdrop-blur-sm rounded-3xl p-6 relative overflow-hidden border border-slate-700/50 hover:border-indigo-400/30 hover:bg-slate-800/90 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-500/10 hover:scale-[1.02]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
          >
            {service.icon}
          </div>
          
          {service.status === "limited" && (
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                Limited
              </div>
              <span className="text-slate-300 text-sm font-medium bg-slate-700/50 px-2 py-1 rounded-lg">
                {service.usage}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="mb-6">
          <h3 className="text-white font-bold text-xl mb-3 group-hover:text-indigo-100 transition-colors">
            {service.name}
          </h3>
          <div className="flex items-center space-x-2 text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">Expire: {service.expireDate}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-indigo-500/25 hover:scale-105 flex items-center space-x-2">
            <span>Open</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
          
          <button className="bg-slate-700/80 hover:bg-slate-600/80 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-slate-500/25 hover:scale-105 flex items-center space-x-2 border border-slate-600/50 hover:border-slate-500/50">
            <span>Renew</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;