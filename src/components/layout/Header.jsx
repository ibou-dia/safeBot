import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Shield, Bell, MapPin, Info } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md dark:bg-gray-800/90 z-10 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
              <Shield size={24} className="animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              SafeBot
            </h1>
          </div>

          {/* Desktop Navigation with Icons */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="flex items-center space-x-1 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
              <span className="relative">
                <span className="absolute -inset-1 rounded-full bg-blue-100 dark:bg-blue-900 scale-0 group-hover:scale-100 transition-transform"></span>
                <MapPin size={18} className="relative z-10" />
              </span>
              <span>Home</span>
            </a>
            <a href="#chat-section" className="flex items-center space-x-1 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
              <span className="relative">
                <span className="absolute -inset-1 rounded-full bg-blue-100 dark:bg-blue-900 scale-0 group-hover:scale-100 transition-transform"></span>
                <Shield size={18} className="relative z-10" />
              </span>
              <span>Report Incident</span>
            </a>
            <a href="#incident-section" className="flex items-center space-x-1 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
              <span className="relative">
                <span className="absolute -inset-1 rounded-full bg-blue-100 dark:bg-blue-900 scale-0 group-hover:scale-100 transition-transform"></span>
                <Bell size={18} className="relative z-10" />
              </span>
              <span>Alerts</span>
            </a>
            <a href="#about-section" className="flex items-center space-x-1 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
              <span className="relative">
                <span className="absolute -inset-1 rounded-full bg-blue-100 dark:bg-blue-900 scale-0 group-hover:scale-100 transition-transform"></span>
                <Info size={18} className="relative z-10" />
              </span>
              <span>About</span>
            </a>
          </nav>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Enable light mode" : "Enable dark mode"}
            >
              {darkMode ? (
                <Sun className="h-6 w-6 text-yellow-500" />
              ) : (
                <Moon className="h-6 w-6 text-gray-700" />
              )}
            </button>
            
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <a 
                href="#" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  window.scrollTo(0, 0); 
                  toggleMobileMenu();
                }} 
                className="px-2 py-1 rounded font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Home
              </a>
              <a 
                href="#chat-section" 
                onClick={(e) => {
                  toggleMobileMenu();
                }} 
                className="px-2 py-1 rounded font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Report Incident
              </a>
              <a 
                href="#incident-section" 
                onClick={(e) => {
                  toggleMobileMenu();
                }} 
                className="px-2 py-1 rounded font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Alerts
              </a>
              <a 
                href="#about-section" 
                onClick={(e) => {
                  toggleMobileMenu();
                }} 
                className="px-2 py-1 rounded font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                About
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
