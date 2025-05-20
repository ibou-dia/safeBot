import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors" aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">City of Indianapolis</p>
            <p className="mb-2">200 E. Washington Street</p>
            <p className="mb-2">Indianapolis, IN 46204</p>
            <p>contact@indysafebot.gov</p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors">Legal Notice</a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors">Terms of Use</a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} IndySafeBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
