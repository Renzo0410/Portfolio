
import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectModal from '../components/ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  detailedDescription: string;
  category: string;
}

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras y pagos.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      detailedDescription: 'Una plataforma completa de e-commerce construida con React y Node.js. Incluye gestión de productos, carrito de compras, procesamiento de pagos con Stripe, autenticación de usuarios y panel de administración.',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'
      ],
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      detailedDescription: 'Aplicación web para gestión de tareas y proyectos con funcionalidades de colaboración en tiempo real. Permite crear equipos, asignar tareas, establecer deadlines y comunicación instantánea entre miembros del equipo.',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard del clima con pronósticos y visualizaciones interactivas.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop'
      ],
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'Weather API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      detailedDescription: 'Dashboard interactivo del clima que muestra condiciones actuales, pronósticos extendidos y datos históricos. Incluye gráficos interactivos, mapas meteorológicos y alertas personalizables para múltiples ubicaciones.',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Blog Personal',
      description: 'Blog personal con sistema CMS y optimización SEO.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop'
      ],
      technologies: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      detailedDescription: 'Blog personal construido con Next.js y MDX para contenido dinámico. Incluye optimización SEO, modo oscuro, comentarios y sistema de categorías.',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'API REST Biblioteca',
      description: 'API REST para gestión de biblioteca con autenticación JWT.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com',
      detailedDescription: 'API REST completa para sistema de biblioteca con gestión de libros, usuarios, préstamos y autenticación mediante JWT. Incluye documentación con Swagger.',
      category: 'backend'
    },
    {
      id: 6,
      title: 'Chat en Tiempo Real',
      description: 'Aplicación de chat con mensajería instantánea y salas.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop'
      ],
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      detailedDescription: 'Aplicación de chat en tiempo real con salas privadas y públicas, emojis, notificaciones push y historial de mensajes.',
      category: 'fullstack'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Volver al Inicio
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Todos los Proyectos
          </h1>
          <p className="text-xl text-muted-foreground">
            Explora mi colección completa de proyectos
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-muted/50 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
                      className="p-2 border border-border rounded hover:bg-muted transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded hover:bg-muted transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default AllProjects;
