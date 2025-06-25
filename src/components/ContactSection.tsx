
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi du formulaire
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre demande. Je vous recontacte dans les plus brefs délais.",
        duration: 5000,
      });
      
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? Contactez-moi pour un devis gratuit et personnalisé
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Mes coordonnées
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Téléphone</p>
                    <a href="tel:0123456789" className="text-blue-400 hover:text-blue-300 transition-colors">
                      01 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:jeremy@jeremy-renov.fr" className="text-blue-400 hover:text-blue-300 transition-colors">
                      jeremy@jeremy-renov.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Zone d'intervention</p>
                    <p className="text-gray-300">Saint-Flour et tout le Cantal</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Horaires</p>
                    <p className="text-gray-300">Lun-Ven: 8h-18h</p>
                    <p className="text-gray-300">Urgences: 24h/24</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h4 className="text-white font-medium mb-4">Zone d'intervention</h4>
              <div className="bg-gray-600 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Saint-Flour et environs</p>
                  <p className="text-xs">Cantal (15)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Demander un devis
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="01 23 45 67 89"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="votre@email.fr"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Décrivez votre projet : type de travaux, surface, délais souhaités..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                ) : (
                  <Send className="h-5 w-5 mr-2" />
                )}
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </motion.button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Champs obligatoires - Devis gratuit et sans engagement
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
