import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Shield } from 'lucide-react';
import ChatMessage from './ChatMessage';
import QuickSuggestion from './QuickSuggestion';

const SimpleChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm SafeBot, your public safety assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Suggestions rapides pour les utilisateurs
  const suggestions = [
    { id: 1, text: "Report a hazard" },
    { id: 2, text: "View local alerts" },
    { id: 3, text: "Safety tips" },
    { id: 4, text: "Emergency contacts" }
  ];

  // Réponses prédéfinies du bot
  const botResponses = {
    "report": "To report a hazard or incident, please provide the following details:\n• Location (street address or landmarks)\n• Type of incident/hazard\n• When you observed it\n• Any immediate dangers\n\nFor life-threatening emergencies, please call 911 immediately.",
    
    "hazard": "To report a hazard, please provide the following details:\n• Location (street address or landmarks)\n• Type of hazard (traffic, structural, environmental)\n• When you observed it\n• Any immediate dangers\n\nFor life-threatening emergencies, please call 911 immediately.",
    
    "alert": "Current public safety alerts in the area:\n\n1. 🚧 Road Construction: Main Street between 5th and 8th Avenue until May 30\n2. 🌊 Flood Warning: Riverside areas expected to experience high water levels\n3. 🚨 Power Outage: Northeast district, crews working to restore power\n4. 🚓 Increased patrols in downtown area due to recent incidents",
    
    "safety": "Essential safety tips:\n\n• Create an emergency plan with your family/household\n• Keep emergency contacts easily accessible\n• Prepare an emergency kit with essentials\n• Stay informed through weather alerts and local news\n• Secure your home with proper locks and smoke detectors\n• Be aware of your surroundings when in public",
    
    "emergency": "Important emergency contacts:\n\n• Emergency Services: 911\n• Police (non-emergency): 555-123-4567\n• Fire Department: 555-765-4321\n• Poison Control: 800-222-1222\n• Crisis Helpline: 988 or 800-273-8255\n• City Services: 311",
    
    "contact": "You can contact public safety services through these channels:\n\n• Emergency: 911\n• Non-emergency police: 555-123-4567\n• City Services: 311\n• Public Safety Department: safety@cityexample.gov\n• Report issues online: www.citysafety.example/report",
    
    "help": "I can help you with:\n\n• Reporting hazards or incidents\n• Viewing current safety alerts\n• Finding safety resources\n• Emergency preparedness tips\n• Contact information for public services\n\nWhat would you like assistance with today?"
  };

  // Auto-scroll lorsque de nouveaux messages sont ajoutés
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Gestionnaire pour l'envoi de messages
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Ajouter le message de l'utilisateur
    const userMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Activer l'animation de saisie du bot
    setIsTyping(true);
    
    // Simuler le délai de réponse du bot
    setTimeout(() => {
      // Trouver une réponse correspondante ou utiliser une réponse par défaut
      const lowerCaseInput = userMessage.text.toLowerCase();
      let botResponse = "I'm not sure I understand. Could you provide more details or try asking about reporting hazards, viewing alerts, safety tips, or emergency contacts?";
      
      // Chercher des mots-clés dans l'entrée utilisateur
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (lowerCaseInput.includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      // Réponses spéciales pour certaines questions fréquentes
      if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
        botResponse = "Hello! I'm SafeBot, your public safety assistant. How can I help you today?";
      } else if (lowerCaseInput.includes("thank")) {
        botResponse = "You're welcome! Is there anything else I can help you with?";
      } else if (lowerCaseInput.includes("who are you") || lowerCaseInput.includes("your name")) {
        botResponse = "I'm SafeBot, a public safety assistant designed to help you with safety information, hazard reporting, and emergency resources.";
      }
      
      // Ajouter la réponse du bot
      const botMessage = { id: Date.now(), text: botResponse, isBot: true };
      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  // Gérer la touche Entrée dans l'input
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Gérer les suggestions rapides
  const handleSuggestionClick = (text) => {
    setInputValue(text);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };
  
  return (
    <div className="border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden h-[600px] flex flex-col">
      {/* Header du chat */}
      <div className="p-4 border-b dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
            <MessageCircle size={18} className="animate-pulse" />
          </div>
          <h2 className="font-medium">Chat with SafeBot</h2>
        </div>
      </div>
      
      {/* Zone des messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f3f4f6\' fill-opacity=\'0.4\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
        {messages.map((message, index) => (
          <div key={message.id} className={`fade-in delay-${index % 3}00`}>
            <ChatMessage {...message} />
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 fade-in">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Shield size={16} />
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
            </div>
          </div>
        )}
        
        <div ref={chatEndRef} />
      </div>
      
      {/* Suggestions rapides */}
      <div className="px-4 py-2 border-t dark:border-gray-700 flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <QuickSuggestion 
            key={suggestion.id} 
            text={suggestion.text} 
            onClick={() => handleSuggestionClick(suggestion.text)} 
          />
        ))}
      </div>
      
      {/* Zone de saisie */}
      <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center space-x-2">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="2"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleChatWindow;
