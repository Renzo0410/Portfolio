import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Gmail',
      value: 'renzo.gabrielch@gmail.com',
      href: 'mailto:renzo.gabrielch@gmail.com',
      fillColor: 'bg-red-500',
      iconColor: 'text-red-500'
    },
    {
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      label: 'WhatsApp',
      value: '+34 624 36 63 25',
      href: 'https://wa.me/34624366325',
      fillColor: 'bg-green-500',
      iconColor: 'text-green-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/renzogabriel04/',
      href: 'https://www.linkedin.com/in/renzogabriel04/',
      fillColor: 'bg-blue-600',
      iconColor: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Renzo0410',
      href: 'https://github.com/Renzo0410',
      fillColor: 'bg-gray-800',
      iconColor: 'text-gray-700'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Contacto
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground">
              Puedes contactarme a través de cualquiera de estos medios:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Liquid fill effect */}
                  <div 
                    className={`absolute inset-0 ${method.fillColor} transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out`}
                    style={{
                      clipPath: 'polygon(0 20px, 100% 0, 100% 100%, 0 100%)'
                    }}
                  />
                  
                  {/* Animated waves effect */}
                  <div 
                    className={`absolute inset-0 ${method.fillColor} opacity-60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100`}
                    style={{
                      clipPath: 'polygon(0 30px, 100% 10px, 100% 100%, 0 100%)'
                    }}
                  />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`${method.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300 transform group-hover:drop-shadow-lg`}>
                      <IconComponent />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300 mb-1">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                        {method.value}
                      </p>
                    </div>
                  </div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                    <div className={`absolute top-1/2 left-1/2 w-0 h-0 ${method.fillColor} rounded-full group-hover:w-96 group-hover:h-96 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out`} />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              &copy; 2025 Renzo Gabriel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;