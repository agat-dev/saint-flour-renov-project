
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      location: 'Saint-Flour',
      rating: 5,
      text: 'Jérémy a rénové notre salle de bain. Travail impeccable, très professionnel et à l\'écoute. Je recommande vivement !',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332b589?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Pierre Martin',
      location: 'Aurillac',
      rating: 5,
      text: 'Intervention rapide pour un dépannage électrique urgent. Très satisfait du service et du professionnalisme.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Sophie Leclerc',
      location: 'Massiac',
      rating: 5,
      text: 'Rénovation complète de notre cuisine. Excellent travail, dans les temps et le budget. Un vrai professionnel !',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'Jean-Claude Moreau',
      location: 'Chaudes-Aigues',
      rating: 5,
      text: 'Plomberie refaite à neuf. Jérémy est très méticuleux et donne de bons conseils. Service après-vente au top.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 5,
      name: 'Isabelle Garnier',
      location: 'Murat',
      rating: 5,
      text: 'Mise aux normes électriques de notre maison ancienne. Travail soigné et explications claires. Très professionnel.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 6,
      name: 'Michel Payet',
      location: 'Ally',
      rating: 5,
      text: 'Dépannage en urgence un dimanche soir. Jérémy s\'est déplacé rapidement. Un grand merci pour sa disponibilité !',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La confiance de mes clients est ma plus belle récompense
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="h-6 w-6 text-gray-400" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
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
          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Rejoignez mes clients satisfaits
            </h3>
            <p className="text-gray-600 mb-6">
              Plus de 500 clients font confiance à Jérémy Rénov' pour leurs travaux de rénovation, plomberie et électricité.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:scale-105"
            >
              Demander votre devis
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
