import { Shield, User } from 'lucide-react';

const ChatMessage = ({ text, isBot }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4 items-end`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2 overflow-hidden shadow-sm flex-shrink-0">
          <Shield size={16} className="text-blue-600 dark:text-blue-400" />
        </div>
      )}
      <div 
        className={`max-w-[80%] px-4 py-3 rounded-lg ${
          isBot 
            ? 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-white rounded-tl-none shadow-sm border border-gray-200 dark:border-gray-700' 
            : 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-tr-none shadow-sm'
        }`}
      >
        <p className="text-sm md:text-base">{text}</p>
      </div>
      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center ml-2 overflow-hidden shadow-sm flex-shrink-0">
          <User size={16} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
