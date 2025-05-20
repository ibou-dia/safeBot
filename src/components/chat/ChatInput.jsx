import { useState } from 'react';
import { Send } from 'lucide-react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      // Prevent scroll jumping
      e.stopPropagation();
      // Keep focus on input field
      e.target.querySelector('input').focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4 border-t dark:border-gray-700">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <button
        type="submit"
        className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors"
        aria-label="Send"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
};

export default ChatInput;
