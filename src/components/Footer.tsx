
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Wrench } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold">Jérémy Rénov'</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Votre artisan BTP de confiance à Saint-Flour. Spécialisé en rénovation, plomberie, électricité et dépannage.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Rénovation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Plomberie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Électricité
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Dépannage urgence
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('a-propos')}
                  className="hover:text-blue-400 transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('realisations')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Réalisations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-blue-500" />
                <a href="tel:0123456789" className="hover:text-blue-400 transition-colors">
                  01 23 45 67 89
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-blue-500" />
                <a href="mailto:jeremy@jeremy-renov.fr" className="hover:text-blue-400 transition-colors">
                  jeremy@jeremy-renov.fr
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-blue-500 mt-1" />
                <div>
                  <p>Saint-Flour</p>
                  <p>Cantal (15)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jérémy Rénov'. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
