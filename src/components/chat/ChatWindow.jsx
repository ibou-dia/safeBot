import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import QuickSuggestion from './QuickSuggestion';
import ChatInput from './ChatInput';
import ApiKeyInput from './ApiKeyInput';
import { getOpenAIApiKey } from '../../config/apiConfig';
import { MessageCircle, Shield, AlertTriangle, Clock, ExclamationTriangle } from 'lucide-react';

// Fonctions de secours en cas d'échec de chargement des services
let formatMessagesFunc = (messages) => {
  return messages.map(msg => ({
    role: msg.isBot ? "assistant" : "user",
    content: msg.text
  }));
};

let getChatCompletionFunc = async () => {
  return { content: "Service API not available. Please check your connection or API key." };
};

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm SafeBot, your public safety assistant. How can I help you today?", isBot: true }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [apiKeySet, setApiKeySet] = useState(false);
  const [error, setError] = useState(null);
  const [services, setServices] = useState({
    formatMessages: formatMessagesFunc,
    getChatCompletion: getChatCompletionFunc
  });
  
  // Charger dynamiquement les services OpenAI
  useEffect(() => {
    const loadServices = async () => {
      try {
        const { formatMessages, getChatCompletion } = await import('../../services/openaiService');
        setServices({
          formatMessages,
          getChatCompletion
        });
        console.log('OpenAI services loaded successfully');
      } catch (err) {
        console.error('Error importing openaiService:', err);
        setError('Failed to load OpenAI services. Using fallback mode.');
      }
    };
    
    loadServices();
  }, []);

  const suggestions = [
    { id: 1, text: "Report a hazard" },
    { id: 2, text: "View alerts" },
    { id: 3, text: "Contact city hall" }
  ];

  const chatEndRef = useRef(null);

  // Auto-scroll to bottom when new messages are added avec un comportement plus contrôlé
  useEffect(() => {
    if (chatEndRef.current) {
      const container = chatEndRef.current.parentElement;
      // Utiliser scrollTo au lieu de scrollIntoView pour un contrôle plus précis
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;
    setError(null);
    
    // Add user message
    const newUserMessage = { id: messages.length + 1, text, isBot: false };
    setMessages(prev => [...prev, newUserMessage]);
    
    // Check if API key is set
    const apiKey = getOpenAIApiKey();
    if (!apiKey && apiKeySet) {
      setError("API key seems to be invalid. Please check your configuration.");
      return;
    }
    
    // Start bot typing animation
    setIsTyping(true);
    
    // If API key isn't set, use fallback responses
    if (!apiKey) {
      setTimeout(() => {
        const fallbackResponses = {
          "report a hazard": "To report a hazard, please provide more details about what you've observed. Where is the hazard located? What is its nature?",
          "view alerts": "There are currently 3 active alerts: flooding in the northern district, construction on Main Street, and a public event downtown this weekend.",
          "contact city hall": "You can contact City Hall by phone or by email at city@example.gov."
        };
        
        const lowerText = text.toLowerCase();
        let botResponse = "I'm not sure I understand. Could you clarify your request? You can ask me to report a hazard, view current alerts, or help you contact city hall. \n\nNote: For more comprehensive responses, please add your OpenAI API key above.";
        
        for (const [key, value] of Object.entries(fallbackResponses)) {
          if (lowerText.includes(key)) {
            botResponse = value;
            break;
          }
        }
        
        setIsTyping(false);
        const newBotMessage = { id: messages.length + 2, text: botResponse, isBot: true };
        setMessages(prev => [...prev, newBotMessage]);
      }, 1000);
      return;
    }
    
    try {
      // Format messages for the API using dynamically loaded service
      const formattedMessages = services.formatMessages(messages.concat(newUserMessage));
      
      // Get response from API using dynamically loaded service
      const response = await services.getChatCompletion(formattedMessages, apiKey);
      
      setIsTyping(false);
      const newBotMessage = { id: messages.length + 2, text: response.content, isBot: true };
      setMessages(prev => [...prev, newBotMessage]);
    } catch (err) {
      console.error('Error getting chat completion:', err);
      setIsTyping(false);
      setError(`Error: ${err.message || 'Failed to get response from OpenAI'}`);
      
      // Add a fallback message
      const errorMessage = { 
        id: messages.length + 2, 
        text: "I'm sorry, I'm having trouble connecting to my API. Please try again later or check your API key configuration.", 
        isBot: true 
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleSuggestionClick = (suggestionText) => {
    handleSendMessage(suggestionText);
  };

  // Prevent default event behavior to avoid page jumping
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden card">
      <div className="p-4 border-b dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
              <MessageCircle size={18} className="animate-pulse" />
            </div>
            <h2 className="font-medium">Chat with SafeBot</h2>
          </div>
        </div>
      </div>
      
      {/* API Key Input */}
      <ApiKeyInput onApiKeySet={setApiKeySet} />
      
      {/* Error Message */}
      {error && (
        <div className="mx-4 my-2 p-3 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 rounded-md flex items-center">
          <ExclamationTriangle size={16} className="mr-2 flex-shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}
      
      {/* Message Area with enhanced visuals */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f3f4f6\' fill-opacity=\'0.4\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
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
      
      {/* Quick Suggestions */}
      <div className="px-4 py-2 border-t dark:border-gray-700 flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <QuickSuggestion 
            key={suggestion.id} 
            text={suggestion.text} 
            onClick={() => handleSuggestionClick(suggestion.text)} 
          />
        ))}
      </div>
      
      {/* Message Input */}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
