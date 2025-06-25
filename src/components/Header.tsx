
import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = ({ className = "", isScrolled = false }: { className?: string, isScrolled?: boolean }) => (
  <svg 
    className={`h-10 w-auto ${className}`}
    viewBox="0 0 200 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Wrench icon */}
    <path 
      d="M15 25L25 15C26.5 13.5 29 13.5 30.5 15L35 19.5C36.5 21 36.5 23.5 35 25L25 35L20 30L15 25Z" 
      fill={isScrolled ? "#1e40af" : "#ffffff"} 
      stroke={isScrolled ? "#1e40af" : "#ffffff"} 
      strokeWidth="1"
    />
    {/* Pipe/tube */}
    <rect 
      x="30" 
      y="20" 
      width="25" 
      height="4" 
      rx="2" 
      fill={isScrolled ? "#3b82f6" : "#ffffff"}
    />
    {/* House outline */}
    <path 
      d="M10 35L20 25L30 35V45H10V35Z" 
      stroke={isScrolled ? "#1e40af" : "#ffffff"} 
      strokeWidth="2" 
      fill="none"
    />
    {/* Text */}
    <text 
      x="65" 
      y="25" 
      fontFamily="Arial, sans-serif" 
      fontSize="16" 
      fontWeight="bold" 
      fill={isScrolled ? "#1e40af" : "#ffffff"}
    >
      Jérémy
    </text>
    <text 
      x="65" 
      y="42" 
      fontFamily="Arial, sans-serif" 
      fontSize="14" 
      fill={isScrolled ? "#3b82f6" : "#ffffff"}
    >
      Rénov'
    </text>
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('a-propos')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('realisations')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Réalisations
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:0123456789"
              className={`flex items-center transition-colors ${
                isScrolled ? 'text-blue-600 hover:text-blue-700' : 'text-white hover:text-gray-200'
              }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">01 23 45 67 89</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Devis gratuit
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('a-propos')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('realisations')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Réalisations
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              <div className="px-3 py-2 border-t border-gray-200">
                <a 
                  href="tel:0123456789"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-2"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">01 23 45 67 89</span>
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Devis gratuit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
