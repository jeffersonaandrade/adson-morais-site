import React from 'react';
import { Award, Users, Heart, Target } from 'lucide-react';
import aboutImage from '../assets/WhatsAppImage2025-08-05at10.30.49.jpeg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Cada paciente é único e merece atenção personalizada e respeitosa."
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Formação contínua e técnicas baseadas em evidências científicas."
    },
    {
      icon: Users,
      title: "Abordagem Integral",
      description: "Tratamento que considera o paciente como um todo, não apenas os sintomas."
    },
    {
      icon: Target,
      title: "Resultados Efetivos",
      description: "Foco em resultados duradouros e melhoria da qualidade de vida."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Adson Morais em atendimento"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Anos de experiência</div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Sobre <span className="text-primary">Adson Morais</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fisioterapeuta especializado com mais de 10 anos de experiência, dedicado a 
                proporcionar cuidado de excelência através de técnicas avançadas e abordagem 
                humanizada.
              </p>
              <p className="text-gray-600 leading-relaxed">
                "Minha missão é ajudar cada paciente a alcançar seu máximo potencial de saúde 
                e bem-estar, utilizando as mais modernas técnicas de fisioterapia, osteopatia, 
                terapia crânio sacral, liberação miofascial instrumental e quiropraxia."	
              </p>
            </div>

            {/* Formação */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Formação e Especialização</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fisioterapeuta - Graduação em Fisioterapia</li>
                <li>• <strong>Especialista em Quiropraxia segundo o Coffito</strong></li>
                <li>• Formação em Osteopatia</li>
                <li>• Certificação na Terapia Crânio Sacral</li>
                <li>• Especialização em Acupuntura método Distal</li>
                <li>• Especialização em Liberação Miofacial Instrumental</li>
              </ul>
            </div>

            {/* Coordenação */}
            <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coordenação Acadêmica</h3>
              <p className="text-gray-700 font-medium">
                Coordenador da Pós-Graduação em Quiropraxia do Instituto Paiva - Recife
              </p>
            </div>

            {/* Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

