
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  technologies: string[];
  github?: string;
  // demo?: string;
  detailedDescription: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Image Carousel */}
          <div className="relative mb-6">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Image indicators */}
                <div className="flex justify-center mt-4 gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Descripción</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>

            {/* <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div> */}

            {/* <div className="flex gap-4 pt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  <Github size={18} />
                  Ver Código
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-lg hover:bg-muted transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                  Ver Demo
                </a>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
