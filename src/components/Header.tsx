
import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = ({ className = "", isScrolled = false }: { className?: string, isScrolled?: boolean }) => (
  <svg 
    className={`h-6 w-auto sm:h-8 flex-shrink-0 ${className}`}
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
      className={`fixed top-0 left-0 right-0 z-50 max-w-full overflow-hidden transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16 max-w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 flex-shrink">
            <button 
              onClick={() => scrollToSection('accueil')}
              className={`transition-all duration-300 ease-in-out text-sm lg:text-base whitespace-nowrap ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-all duration-300 ease-in-out text-sm lg:text-base whitespace-nowrap ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('a-propos')}
              className={`transition-all duration-300 ease-in-out text-sm lg:text-base whitespace-nowrap ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('realisations')}
              className={`transition-all duration-300 ease-in-out text-sm lg:text-base whitespace-nowrap ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Réalisations
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-all duration-300 ease-in-out text-sm lg:text-base whitespace-nowrap ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0 min-w-0">
            <a 
              href="tel:0123456789"
              className={`flex items-center transition-all duration-300 ease-in-out whitespace-nowrap text-xs lg:text-sm ${
                isScrolled ? 'text-blue-600 hover:text-blue-700' : 'text-white hover:text-gray-200'
              }`}
            >
              <Phone className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2 flex-shrink-0" />
              <span className="font-medium hidden lg:inline">01 23 45 67 89</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 px-2 lg:py-2 lg:px-3 rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-xs lg:text-sm whitespace-nowrap flex-shrink-0"
            >
              Devis
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 ease-in-out ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-white/95 backdrop-blur-md border-t border-gray-200/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 max-w-full">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('a-propos')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('realisations')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                Réalisations
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                Contact
              </button>
              <div className="px-3 py-2 border-t border-gray-200/50">
                <a 
                  href="tel:0123456789"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-all duration-200 mb-2"
                >
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="font-medium">01 23 45 67 89</span>
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 hover:scale-105"
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
