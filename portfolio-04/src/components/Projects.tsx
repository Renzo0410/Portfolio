
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';

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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'R&G SALUD',
      description: 'Página web desarrollada durante el aprendizaje en MasterD. Centrada específicamente para hospitales, doctores y/o pacientes.',
      image: '/img/projects/hospital/img00.png',
      images: [
        '/img/projects/hospital/img01.png',
        '/img/projects/hospital/img02.png',
        '/img/projects/hospital/img03.png',
        '/img/projects/hospital/img04.png',
        '/img/projects/hospital/img05.png',
        '/img/projects/hospital/img06.png',
        '/img/projects/hospital/img07.png'
      ],
      technologies: ['PHP', 'CSS', 'Bootstrap', 'JavaScript', 'phpMyAdmin'],
      github: 'https://github.com/Renzo0410/PHP/tree/main/00-Hospital_R%26G_Salud',
      // demo: 'https://demo.com',
      detailedDescription: 'El proyecto consta de una página de inicio, sección de noticias, capacidad registrarse y acceder como usuario. Al contar con una base de datos solida se puede eligir y/o registrar nuevos administradores/usuarios, además de poder modificar/eliminar citas médicas y noticias.'
    },
    {
      id: 2,
      title: 'LIGA DEPORTIVA',
      description: 'Proyecto inspirado en el sitio oficial de LaLiga Santander. Desarrollado con el objetivo principal de practicar diseño web responsive.',
      image: '/img/projects/liga-deportiva/img00.png',
      images: [
        '/img/projects/liga-deportiva/img01.png',
        '/img/projects/liga-deportiva/img02.png',
        '/img/projects/liga-deportiva/img03.png',
        '/img/projects/liga-deportiva/img04.png',
        '/img/projects/liga-deportiva/img05.png',
        '/img/projects/liga-deportiva/img06.png',
        '/img/projects/liga-deportiva/img07.png',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Json', 'Ajax'],
      github: 'https://github.com/Renzo0410/JavaScript/tree/main/00-LaLiga-Santander',
      // demo: 'https://demo.com',
      detailedDescription: 'Cuenta con iconos superiores que redirigen a webs de cada club; detalles de estadios con uso de navegador; galerias destacadas con apartado de equipos ganadores. Visualización de equipos con más títulos y agregado de formularios con generador de presupuestos.'
    },
    {
      id: 3,
      title: 'TRES EN RAYA',
      description: 'Proyecto sobre el famoso juego "Tres en raya" desarrollado con la finalidad de hacer práctica de React y conocer más sobre este framework.',
      image: '/img/projects/tres-en-raya/img00.png',
      images: [
        '/img/projects/tres-en-raya/img01.png',
        '/img/projects/tres-en-raya/img02.png',
        '/img/projects/tres-en-raya/img03.png',
      ],
      technologies: ['HTML', 'React', 'Vite', 'CSS', 'JavaScript'],
      github: 'https://github.com/Renzo0410/JavaScript/tree/main/01-react/00-tres-en-raya',
      // demo: 'https://demo.com',
      detailedDescription: 'Este proyecto tiene la finalidad de hacer práctica en el uso de React Vite facilitando el aprendizaje recreando el famoso juego "Tres en raya" con dinámicas donde se obtiene el ganador o, si no lo hay, la declaración de empate.'
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Proyectos Destacados
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
                  >
                    Ver Detalles
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border-2 border-black border rounded hover:bg-muted transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {/* {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded hover:bg-muted transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/todos-los-proyectos"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 font-medium"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
