import { motion } from 'framer-motion';
import { Phone, Award, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/lovable-uploads/5252e0de-a536-4c1f-8e52-93a251b69ef2.png")'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-800 bg-opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="block">Jérémy Rénov'</span>
              <span className="block text-2xl md:text-3xl font-medium text-gray-100 mt-2">
                Artisan BTP à Saint-Flour
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              Rénovation • Plomberie • Électricité • Dépannage
            </p>
          </div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-white font-medium">Artisan depuis 15 ans</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-white font-medium">+500 clients satisfaits</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Demander un devis
            </button>
            <a 
              href="tel:0123456789"
              className="flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-800 font-medium py-3 px-8 rounded-md transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-5 w-5 mr-2" />
              Appeler en urgence
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
