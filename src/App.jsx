import React, { useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import About from './components/info/About';
import MapPlaceholder from './components/info/MapPlaceholder';
import StatsOverview from './components/info/StatsOverview';
import SimpleChatWindow from './components/chat/SimpleChatWindow';

function App() {
  // Références pour chaque section
  const chatSectionRef = useRef(null);
  const incidentSectionRef = useRef(null);
  const resourcesSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Header />
        <Hero />
        
        <main>
          <div className="max-w-6xl mx-auto">
          {/* Main chatbot section */}
          <section ref={chatSectionRef} className="my-12 py-8 transform transition-all duration-500 hover:translate-y-1 hover:shadow-lg rounded-xl" id="chat-section">
            <h1 className="text-3xl font-bold text-center mb-6">SafeBot - Public Safety Assistant</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Welcome to the public safety communication platform. 
              Ask SafeBot about safety concerns, report incidents, or get emergency information.
            </p>
            <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
              <div className="col-span-1">
                {/* Temporarily removing problematic component */}
                <SimpleChatWindow />
              </div>
            </div>
          </section>

          {/* Information and Incidents Section */}
          <section ref={incidentSectionRef} className="my-16 py-10 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-xl" id="incident-section">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold mb-8 text-center">Incident Monitoring</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Incident Locations</h3>
                  <MapPlaceholder />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Recent Statistics</h3>
                  <StatsOverview />
                </div>
              </div>
            </div>
          </section>
          
          {/* Safety resources section */}
          <section ref={resourcesSectionRef} className="my-16 p-8 bg-blue-50 dark:bg-blue-900/40 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-xl" id="resources-section">
            <h2 className="text-2xl font-bold mb-4 text-center">Safety Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Emergency Numbers</h3>
                <p className="text-gray-600 dark:text-gray-400">Access important numbers for emergency situations</p>
                <a href="#" onClick={(e) => e.preventDefault()} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-block">
                  View Contacts
                </a>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Preparation Guide</h3>
                <p className="text-gray-600 dark:text-gray-400">Tips to prepare for emergency situations</p>
                <a href="#" onClick={(e) => e.preventDefault()} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-block">
                  Download Guide
                </a>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Alert Center</h3>
                <p className="text-gray-600 dark:text-gray-400">Sign up to receive real-time alerts</p>
                <a href="#" onClick={(e) => e.preventDefault()} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-block">
                  Sign Up
                </a>
              </div>
            </div>
          </section>

          {/* About section */}
          <section ref={aboutSectionRef} className="my-16 py-10 bg-purple-50 dark:bg-purple-900/20 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-xl" id="about-section">
            <h2 className="text-2xl font-bold mb-6 text-center">About Our Project</h2>
            <About />
          </section>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
