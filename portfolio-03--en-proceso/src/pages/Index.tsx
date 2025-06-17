
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Mail, Github, Linkedin, ExternalLink, Calendar, MapPin, Code, Database, Globe } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  // Smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    });
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'educacion', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con React, Node.js y MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con autenticación y colaboración en tiempo real",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Sitio web personal con diseño responsive y animaciones suaves",
      technologies: ["React", "TypeScript", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  const education = [
    {
      title: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Tecnológica",
      period: "2019 - 2023",
      description: "Especialización en desarrollo de software y bases de datos"
    },
    {
      title: "Certificación Full Stack Developer",
      institution: "FreeCodeCamp",
      period: "2022",
      description: "Desarrollo completo con JavaScript, React, Node.js y MongoDB"
    },
    {
      title: "Curso de React Avanzado",
      institution: "Platzi",
      period: "2023",
      description: "Hooks avanzados, Context API, y optimización de performance"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Node.js", 
    "Python", "MongoDB", "PostgreSQL", "Git", "Docker"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevPortfolio
            </h1>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'sobre-mi', label: 'Sobre mí' },
                { id: 'proyectos', label: 'Proyectos' },
                { id: 'educacion', label: 'Educación' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold mb-6">
                <Code className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Desarrollador Web Full Stack
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Especializado en crear experiencias digitales excepcionales con tecnologías modernas.
              Transformo ideas en soluciones web innovadoras y escalables.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('proyectos')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Ver Proyectos
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contacto')}>
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce mi trayectoria, habilidades y pasión por el desarrollo web
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Soy un desarrollador web full stack con más de 3 años de experiencia creando 
                aplicaciones web modernas y eficientes. Me especializo en React, Node.js y 
                tecnologías de bases de datos.
              </p>
              <p className="text-lg text-muted-foreground">
                Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
                siempre buscando las mejores prácticas y las últimas tendencias en desarrollo web.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-blue-50">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-medium">Frontend</p>
                </div>
                <div className="p-4 rounded-lg bg-green-50">
                  <Database className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm font-medium">Backend</p>
                </div>
                <div className="p-4 rounded-lg bg-purple-50">
                  <Code className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm font-medium">Full Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes y destacados
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-scale">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Educación</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mi formación académica y certificaciones profesionales
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    {index < education.length - 1 && <div className="w-0.5 h-16 bg-border mt-2"></div>}
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {item.institution}
                        <Calendar className="w-4 h-4 ml-2" />
                        {item.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>
                  Te responderé lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre</label>
                      <Input placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="tu@email.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Asunto</label>
                    <Input placeholder="Asunto del mensaje" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensaje</label>
                    <Textarea 
                      placeholder="Cuéntame sobre tu proyecto..." 
                      rows={5}
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 DevPortfolio. Diseñado y desarrollado con ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
