import { BarChart, AlertTriangle, Megaphone, Activity, TrendingDown, TrendingUp, Clock } from 'lucide-react';

const StatsOverview = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-5 card">
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-2">
          <Activity className="h-5 w-5" />
        </div>
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Recent Statistics</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Incidents */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transform transition-transform hover:scale-105 hover:shadow-md">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-4 shadow-sm">
              <AlertTriangle className="h-6 w-6 text-red-500 dark:text-red-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Weekly Incidents</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 dark:from-red-400 dark:to-red-500 bg-clip-text text-transparent">27</p>
            </div>
          </div>
          <div className="mt-3 flex items-center text-xs text-green-600 dark:text-green-400 font-medium">
            <TrendingDown className="h-4 w-4 mr-1" />
            <span>14% decrease from last week</span>
          </div>
        </div>
        
        {/* Alert Types */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transform transition-transform hover:scale-105 hover:shadow-md">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-4 shadow-sm">
              <Megaphone className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Most Frequent Alerts</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">Traffic</p>
            </div>
          </div>
          <div className="mt-3 flex items-center text-xs text-gray-600 dark:text-gray-400 font-medium">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-yellow-500 dark:bg-yellow-400 h-2 rounded-full" style={{ width: '42%' }}></div>
            </div>
            <span className="ml-2 whitespace-nowrap">42% of all alerts</span>
          </div>
        </div>
        
        {/* Response Time */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transform transition-transform hover:scale-105 hover:shadow-md">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 shadow-sm">
              <Clock className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Average Response Time</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">4.2 min</p>
            </div>
          </div>
          <div className="mt-3 flex items-center text-xs text-red-500 dark:text-red-400 font-medium">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>0.5 min increase from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
