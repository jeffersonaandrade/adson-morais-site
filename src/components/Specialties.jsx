import React from 'react';
import { Heart, Brain, Bone, Hand, Zap } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: Heart,
      title: "Fisioterapia",
      description: "Tratamento e reabilitação de lesões musculoesqueléticas, neurológicas e respiratórias com técnicas modernas e eficazes.",
      benefits: ["Alívio da dor", "Melhora da mobilidade", "Fortalecimento muscular", "Prevenção de lesões"]
    },
    {
      icon: Bone,
      title: "Osteopatia",
      description: "Abordagem holística que trata o corpo como um todo, focando na estrutura e função do sistema musculoesquelético.",
      benefits: ["Equilíbrio corporal", "Melhora da postura", "Alívio de tensões", "Bem-estar geral"]
    },
    {
      icon: Brain,
      title: "Terapia Crânio Sacral",
      description: "Técnica suave que trabalha com o sistema nervoso central para promover relaxamento e cura natural.",
      benefits: ["Redução do estresse", "Melhora do sono", "Alívio de dores de cabeça", "Equilíbrio emocional"]
    },
    {
      icon: Hand,
      title: "Liberação Miofascial Instrumental",
      description: "Técnica que utiliza instrumentos especializados para tratar aderências e tensões na fáscia muscular.",
      benefits: ["Melhora da flexibilidade", "Redução de aderências", "Alívio da dor", "Recuperação acelerada"]
    },
    {
      icon: Zap,
      title: "Quiropraxia",
      description: "Tratamento focado na coluna vertebral e sistema nervoso para restaurar a função e aliviar a dor.",
      benefits: ["Alinhamento da coluna", "Melhora da função nervosa", "Alívio de dores nas costas", "Maior mobilidade"]
    }
  ];

  return (
    <section id="especialidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Minhas <span className="text-primary">Especialidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos especializados para atender 
            suas necessidades específicas de saúde e bem-estar.
          </p>
        </div>

        {/* Especialidades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <specialty.icon className="text-primary" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {specialty.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {specialty.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm">Benefícios:</h4>
                <ul className="space-y-1">
                  {specialty.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não sabe qual tratamento é ideal para você?
            </h3>
            <p className="text-gray-600 mb-6">
              Agende uma consulta de avaliação e descubra o melhor caminho para sua recuperação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5581999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold"
              >
                Falar no WhatsApp
              </a>
              <a
                href="#"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;

