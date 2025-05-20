import { Sparkles } from 'lucide-react';

const QuickSuggestion = ({ text, onClick }) => {
  // Wrapper function to handle the click event and prevent scroll jumping
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };
  
  return (
    <button
      onClick={handleClick}
      type="button" // Explicitly set button type to avoid form submission
      className="py-2 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 dark:hover:from-blue-800/50 dark:hover:to-indigo-800/50 rounded-full text-sm transition-all duration-300 shadow-sm hover:shadow border border-blue-100 dark:border-blue-800/30 hover:border-blue-200 dark:hover:border-blue-700/50 flex items-center space-x-1 transform hover:-translate-y-1 group"
    >
      <Sparkles size={12} className="text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span>{text}</span>
    </button>
  );
};

export default QuickSuggestion;
