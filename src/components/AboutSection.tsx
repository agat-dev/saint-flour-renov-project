
import { motion } from 'framer-motion';
import { CheckCircle, Award, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  const qualities = [
    {
      icon: CheckCircle,
      title: 'Qualité garantie',
      description: 'Travail soigné avec des matériaux de qualité'
    },
    {
      icon: Clock,
      title: 'Rapidité',
      description: 'Interventions rapides et efficaces'
    },
    {
      icon: Award,
      title: 'Expérience',
      description: '15 ans d\'expérience dans le BTP'
    },
    {
      icon: Heart,
      title: 'Proximité',
      description: 'Service local et relation de confiance'
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Jérémy, artisan BTP à Saint-Flour"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/20 to-transparent" />
            </div>
            
            {/* Badge flottant */}
            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm">Années d'expérience</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
                Qui suis-je ?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Je suis Jérémy, artisan BTP installé à Saint-Flour dans le Cantal depuis plus de 15 ans. 
                  Passionné par mon métier, je mets mon savoir-faire au service de votre habitat.
                </p>
                <p>
                  Ma priorité ? Vous offrir un service de qualité, dans les délais convenus, avec le souci du détail. 
                  Que ce soit pour une urgence ou un projet de rénovation, je m'engage à vous accompagner avec professionnalisme et proximité.
                </p>
                <p>
                  Basé au cœur du Cantal, je connais parfaitement les spécificités locales et je privilégie 
                  toujours une relation de confiance avec mes clients.
                </p>
              </div>
            </div>

            {/* Qualities Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <quality.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm">{quality.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{quality.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105"
              >
                Parlons de votre projet
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
