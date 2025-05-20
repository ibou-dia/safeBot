import { Info, Users, ShieldCheck, Globe, MessageSquare } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 card">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 mr-2">
          <Info className="h-5 w-5" />
        </div>
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          About SafeBot
        </span>
      </h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          SafeBot is an innovative public safety communication platform designed to keep communities informed, 
          connected, and safe through real-time incident reporting and assistance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To empower communities through accessible safety information and responsive communication tools that help prevent incidents
              and enable rapid assistance when needed.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Who We Serve</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Residents, visitors, businesses, and public safety officials who need reliable information 
              about local safety concerns and community resources.
            </p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <ul className="space-y-4 mb-6">
          <li className="flex items-start">
            <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-2 flex-shrink-0">
              <MessageSquare className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <span className="font-medium">AI-Powered Assistance:</span> Our chatbot provides immediate responses to safety questions and guides you through incident reporting.
            </div>
          </li>
          <li className="flex items-start">
            <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-2 flex-shrink-0">
              <Globe className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <span className="font-medium">Interactive Mapping:</span> Visualize safety incidents in your area and access location-based resources.
            </div>
          </li>
          <li className="flex items-start">
            <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-2 flex-shrink-0">
              <ShieldCheck className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <span className="font-medium">Real-time Alerts:</span> Stay informed about emergencies and other safety concerns as they develop.
            </div>
          </li>
        </ul>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30 mb-6">
          <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Our Technology</h4>
          <p className="text-blue-700 dark:text-blue-300">
            SafeBot leverages advanced AI, real-time data processing, and community-driven insights to provide
            the most accurate and helpful safety information possible.
          </p>
        </div>
        
        <div className="text-center">
          <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg transform transition-transform hover:-translate-y-1">
            Join Our Community
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Together, we can build safer communities through better communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
