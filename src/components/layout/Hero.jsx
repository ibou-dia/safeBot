import { MessageSquare, Shield, AlertTriangle, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const chatSectionRef = useRef(null);

  const scrollToChat = () => {
    document.getElementById('chat-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white overflow-hidden rounded-b-3xl shadow-lg mb-8">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}
      ></div>
      
      <div className="container mx-auto px-6 py-16 md:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <div className="mb-4 inline-block">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium">
                <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-green-400"></span>
                <span>AI-Powered Public Safety</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Your Safety Assistant <br />
              <span className="bg-gradient-to-r from-blue-200 to-purple-100 bg-clip-text text-transparent">Always at Your Service</span>
            </h1>
            
            <p className="text-xl text-blue-50 mb-8 max-w-lg">
              SafeBot helps you stay informed about safety issues, report incidents, and connect with emergency services when you need them most.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToChat} className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Chatting Now
              </button>
              
              <a href="#about-section" className="bg-blue-700/30 hover:bg-blue-700/50 backdrop-blur-sm px-6 py-3 rounded-lg font-medium border border-white/20 transition-all flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 transform rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold">SafeBot Assistant</h3>
                  <p className="text-sm text-blue-100">Online and ready to help</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <p className="text-sm">How can SafeBot help keep your community safer?</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-yellow-300" />
                    <p className="text-sm">Report suspicious activity in your area</p>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-300" />
                    <p className="text-sm">Get real-time safety alerts and notifications</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm text-blue-200">
                Powered by AI for faster, more accurate assistance
              </div>
            </div>
            
            {/* Decoration elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-500/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-blue-500/30 rounded-full blur-xl"></div>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToChat} className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors">
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
