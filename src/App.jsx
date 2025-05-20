import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import ChatWindow from './components/chat/ChatWindow';
import MapPlaceholder from './components/info/MapPlaceholder';
import StatsOverview from './components/info/StatsOverview';
import { useEffect, useRef } from 'react';

function App() {
  // Références pour chaque section
  const chatSectionRef = useRef(null);
  const incidentSectionRef = useRef(null);
  const resourcesSectionRef = useRef(null);
  
  // Gestion légère des problèmes de défilement
  useEffect(() => {
    // Fonction simplifiée pour empêcher uniquement le comportement des liens vides
    const handleEmptyLinks = (e) => {
      // Cibler uniquement les liens vides
      if (e.target.tagName && e.target.tagName.toLowerCase() === 'a') {
        const href = e.target.getAttribute('href');
        if (href === '#' || href === '') {
          e.preventDefault();
        }
      }
    };
    
    // Utiliser la capture false pour permettre aux autres gestionnaires de fonctionner normalement
    document.addEventListener('click', handleEmptyLinks, false);
    
    return () => {
      document.removeEventListener('click', handleEmptyLinks, false);
    };
  }, []);
  return (
    <ThemeProvider>
      <Layout>
        <div className="max-w-6xl mx-auto">
          {/* Main chatbot section */}
          <section ref={chatSectionRef} className="my-8" id="chat-section">
            <h1 className="text-3xl font-bold text-center mb-6">IndySafeBot - Indianapolis Public Safety Assistant</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Welcome to Indianapolis public safety communication platform. 
              IndySafeBot helps you stay informed, report incidents, and get assistance quickly.
            </p>
            
            {/* Chat Section */}
            <div className="mb-12 max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">Chat with IndySafeBot</h2>
              <ChatWindow />
            </div>
          </section>

          {/* Information and Incidents Section */}
          <section ref={incidentSectionRef} className="my-12 py-8 bg-gray-50 dark:bg-gray-800 rounded-lg" id="incident-section">
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
          <section ref={resourcesSectionRef} className="my-12 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg" id="resources-section">
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
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
