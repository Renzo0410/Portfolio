
import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Sobre Mí
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Programador Full
                    Stack Junior con sólida formación en desarrollo web. Estoy en
                    busca de mi primera experiencia
                    laboral en este sector y cuento con
                    muchas ganas de seguir aprendiendo. 
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sé que mis virtudes y esfuerzo hablan por mí. Me considero una persona
                    muy comprometida y por
                    eso aseguro eficiencia, creatividad, calidad y
                    seguridad en mis proyectos.
              </p>

              <div className="flex flex-wrap gap-3">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Tailwind', 'PHP', 'MySQL', 'SQL', 'Java'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <img
                  src="/img/me/me01.jpg"
                  alt="Perfil"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
