
import { motion } from 'framer-motion';
import { Wrench, Zap, Droplets, AlertCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Rénovation',
      description: 'Rénovation complète ou partielle de votre habitat. Cuisine, salle de bain, peinture, sols.',
      features: ['Devis détaillé', 'Matériaux de qualité', 'Finitions soignées']
    },
    {
      icon: Droplets,
      title: 'Plomberie',
      description: 'Installation, réparation et entretien de vos équipements sanitaires et de chauffage.',
      features: ['Dépannage 24/7', 'Installation sanitaire', 'Chauffage']
    },
    {
      icon: Zap,
      title: 'Électricité',
      description: 'Mise aux normes, installation électrique complète et dépannage électrique.',
      features: ['Mise aux normes', 'Éclairage LED', 'Tableau électrique']
    },
    {
      icon: AlertCircle,
      title: 'Dépannage',
      description: 'Service d\'urgence 24h/24 pour tous vos problèmes de plomberie et électricité.',
      features: ['Intervention rapide', 'Disponible 24/7', 'Tarif transparent']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
            Mes Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un service complet pour tous vos besoins en BTP, plomberie et électricité à Saint-Flour et dans le Cantal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Besoin d'un devis personnalisé pour votre projet ?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:scale-105"
          >
            Demander un devis gratuit
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
