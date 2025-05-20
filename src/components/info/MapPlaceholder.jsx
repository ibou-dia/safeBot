import { MapPin, Navigation, AlertTriangle, Shield } from 'lucide-react';

const MapPlaceholder = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 card">
      <div className="relative aspect-video">
        {/* Stylized map background with grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M0 0h100v1H0zM0 20h100v1H0zM0 40h100v1H0zM0 60h100v1H0zM0 80h100v1H0zM0 0v100h1V0zM20 0v100h1V0zM40 0v100h1V0zM60 0v100h1V0zM80 0v100h1V0z\'/%3E%3C/g%3E%3C/svg%3E')"          
          }}
        ></div>
        
        {/* Map center UI element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-2">
              <MapPin className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Indianapolis Interactive Map</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">(Click to expand)</p>
          </div>
        </div>
        
        {/* Stylized incident markers with tooltips */}
        <div className="absolute top-1/4 left-1/3 group">
          <div className="h-6 w-6 bg-red-500 rounded-full animate-pulse flex items-center justify-center shadow-lg">
            <AlertTriangle size={12} className="text-white" />
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-white dark:bg-gray-800 p-2 rounded shadow-lg text-xs w-40 text-center">
            <p className="font-bold text-red-600 dark:text-red-400">Critical Alert</p>
            <p className="text-gray-700 dark:text-gray-300">Road closure on Main St</p>
          </div>
          <div className="absolute w-24 h-24 -inset-3 bg-red-500/20 rounded-full animate-ping opacity-75 scale-0 group-hover:scale-100 transition-transform"></div>
        </div>

        <div className="absolute top-2/3 left-2/3 group">
          <div className="h-6 w-6 bg-yellow-500 rounded-full animate-pulse flex items-center justify-center shadow-lg">
            <Shield size={12} className="text-white" />
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-white dark:bg-gray-800 p-2 rounded shadow-lg text-xs w-40 text-center">
            <p className="font-bold text-yellow-600 dark:text-yellow-400">Warning</p>
            <p className="text-gray-700 dark:text-gray-300">Traffic congestion on 5th Ave</p>
          </div>
          <div className="absolute w-24 h-24 -inset-3 bg-yellow-500/20 rounded-full animate-ping opacity-75 scale-0 group-hover:scale-100 transition-transform"></div>
        </div>

        <div className="absolute top-1/2 right-1/4 group">
          <div className="h-6 w-6 bg-blue-500 rounded-full animate-pulse flex items-center justify-center shadow-lg">
            <Navigation size={12} className="text-white" />
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-white dark:bg-gray-800 p-2 rounded shadow-lg text-xs w-40 text-center">
            <p className="font-bold text-blue-600 dark:text-blue-400">Information</p>
            <p className="text-gray-700 dark:text-gray-300">Police station location</p>
          </div>
          <div className="absolute w-24 h-24 -inset-3 bg-blue-500/20 rounded-full animate-ping opacity-75 scale-0 group-hover:scale-100 transition-transform"></div>
        </div>
      </div>
      
      {/* Map legend */}
      <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-between">
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">Alerts</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">Warnings</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">Information</span>
          </div>
        </div>
        <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View full map</button>
      </div>
      <div className="p-3 text-center bg-gray-100 dark:bg-gray-800">
        <p className="text-sm font-medium">3 active incidents reported</p>
      </div>
    </div>
  );
};

export default MapPlaceholder;
