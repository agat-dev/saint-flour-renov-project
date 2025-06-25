
import { motion } from 'framer-motion';
import { Phone, Clock, AlertTriangle } from 'lucide-react';

const EmergencySection = () => {
  return (
    <section className="py-16 bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Besoin d'un dépannage rapide ?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Service d'urgence disponible 24h/24 et 7j/7 pour tous vos problèmes de plomberie et électricité
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center text-white">
              <Clock className="h-6 w-6 mr-3" />
              <span className="text-lg font-medium">Intervention sous 30 minutes</span>
            </div>
            <div className="flex items-center text-white">
              <Phone className="h-6 w-6 mr-3" />
              <span className="text-lg font-medium">Disponible 24/7</span>
            </div>
          </div>

          <motion.a
            href="tel:0123456789"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold text-xl py-4 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            <Phone className="h-6 w-6 mr-3" />
            01 23 45 67 89
          </motion.a>

          <p className="text-blue-100 text-sm mt-4">
            Devis gratuit • Tarif transparent • Garantie sur les interventions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencySection;
