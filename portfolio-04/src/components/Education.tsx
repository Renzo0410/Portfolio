
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Máster en desarrollo fullstack y pentesting web',
      institution: 'Davante (MasterD - MEDAC)',
      period: 'feb. 2023 - mar. 2025',
      description: 'Especialización en desarrollo full stack'
    },
    {
      degree: 'Ingeniería de Software e Inteligencia Artificial',
      institution: 'SENATI',
      period: 'feb. 2021 - dic. 2022',
      description: 'Incompleto'
    },
    // {
    //   degree: 'Full Stack Web Development',
    //   institution: 'FreeCodeCamp',
    //   period: '2022',
    //   description: 'Certificación completa en desarrollo web frontend y backend.'
    // },
    // {
    //   degree: 'AWS Cloud Practitioner',
    //   institution: 'Amazon Web Services',
    //   period: '2023',
    //   description: 'Certificación en servicios en la nube y arquitectura AWS.'
    // }
  ];

  return (
    <section id="educacion" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Educación y Certificaciones
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <span className="font-medium">{item.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
