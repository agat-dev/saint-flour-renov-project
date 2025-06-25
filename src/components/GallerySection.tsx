import { motion } from 'framer-motion';
import { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Plomberie sanitaire',
      category: 'Plomberie',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Rénovation salle de bain',
      category: 'Rénovation',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Carrelage sol et mur',
      category: 'Rénovation',
      image: '/lovable-uploads/8108d20e-4afc-4348-9497-c9bde8d01480.png'
    },
    {
      id: 4,
      title: 'Rénovation cuisine',
      category: 'Rénovation',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      title: 'Installation électrique',
      category: 'Électricité',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      title: 'Mise aux normes électriques',
      category: 'Électricité',
      image: '/lovable-uploads/72cb4df0-e601-4700-9fbd-645f8543acce.png'
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
            Mes Réalisations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents à Saint-Flour et dans le Cantal
          </p>
        </motion.div>

        {/* Avant/Après Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/ded9cd4e-c54d-4572-9113-61b3c132ba39.png"
                  alt="Avant rénovation"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/d82e3d6e-4f5d-47f4-8568-327aa1600734.png"
                  alt="Après rénovation"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h4 className="font-semibold text-sm mb-1">{project.title}</h4>
                    <p className="text-xs text-gray-200">{project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Projet agrandi"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
