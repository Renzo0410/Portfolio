
import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
  <div className="container mx-auto px-6 text-center">
    <div className="animate-fade-in">
      
      {/* Imagen estilo circular con línea horizontal */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Imagen */}
        <div className="relative z-10 bg-white rounded-full overflow-hidden border-2 border-primary shadow-lg mx-4 w-30 h-40">
          <img
            src="/img/me/me02.jpg" // ajusta el path si es necesario
            alt="Renzo Gabriel"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
        ¡Hola, soy <span className="text-primary">Renzo Gabriel!</span>
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Desarrollador Web
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
          className="border-black border text-foreground px-8 py-3 rounded-lg hover:bg-muted transition-colors duration-200 font-medium"
        >
          Ver Proyectos
        </button>
        <button
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          className="border-black border text-foreground px-8 py-3 rounded-lg hover:bg-muted transition-colors duration-200 font-medium"
        >
          Contáctame
        </button>

        {/* Botón de descarga de CV */}
        <a
          href="/cv/RenzoGabriel_CV.pdf" // asegúrate de tener este archivo en la carpeta public/cv/
          download
          className="border-black border text-foreground px-8 py-3 rounded-lg hover:bg-muted transition-colors duration-200 font-medium"
        >
          Descargar CV
        </a>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
