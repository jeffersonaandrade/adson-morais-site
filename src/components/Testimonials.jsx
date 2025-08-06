import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "45 anos",
      condition: "Dor nas costas crônica",
      text: "Depois de anos sofrendo com dores nas costas, encontrei no Adson um profissional excepcional. Suas técnicas de osteopatia me devolveram a qualidade de vida. Hoje posso brincar com meus netos sem dor!",
      rating: 5,
      treatment: "Osteopatia"
    },
    {
      name: "João Santos",
      age: "32 anos",
      condition: "Lesão esportiva",
      text: "Como atleta, precisava de um tratamento eficaz para minha lesão no joelho. O Adson não só me curou, como me ensinou exercícios para prevenir futuras lesões. Voltei aos treinos mais forte que antes!",
      rating: 5,
      treatment: "Fisioterapia"
    },
    {
      name: "Ana Costa",
      age: "28 anos",
      condition: "Estresse e ansiedade",
      text: "A terapia crânio sacral com o Adson foi transformadora. Além de aliviar minhas dores de cabeça constantes, me ajudou a controlar a ansiedade. É um profissional que trata o paciente como um todo.",
      rating: 5,
      treatment: "Terapia Crânio Sacral"
    },
    {
      name: "Carlos Mendes",
      age: "55 anos",
      condition: "Problemas posturais",
      text: "Trabalho muito tempo sentado e desenvolvi sérios problemas posturais. O tratamento com o Adson corrigiu minha postura e eliminou as dores. Profissional competente e muito atencioso.",
      rating: 5,
      treatment: "Quiropraxia"
    },
    {
      name: "Fernanda Lima",
      age: "38 anos",
      condition: "Fibromialgia",
      text: "Convivo com fibromialgia há anos e já havia perdido a esperança. O Adson me mostrou que é possível ter qualidade de vida. Suas técnicas de liberação miofascial foram fundamentais na minha recuperação.",
      rating: 5,
      treatment: "Liberação Miofascial"
    },
    {
      name: "Roberto Oliveira",
      age: "42 anos",
      condition: "Hérnia de disco",
      text: "Estava considerando cirurgia para minha hérnia de disco quando conheci o Adson. Seu tratamento conservador foi tão eficaz que evitei a operação. Hoje vivo normalmente, sem limitações.",
      rating: 5,
      treatment: "Fisioterapia + Osteopatia"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos <span className="text-primary">pacientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de pessoas que confiaram em nosso trabalho e 
            transformaram suas vidas através do cuidado especializado.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Pacientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
        </div>

        {/* Depoimentos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-primary text-white p-2 rounded-full">
                <Quote size={16} />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Depoimento */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Informações do Paciente */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.age}</p>
                    <p className="text-sm text-gray-500">{testimonial.condition}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.treatment}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Você também pode ter sua história de sucesso
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Não deixe a dor limitar sua vida. Agende uma consulta e descubra 
              como podemos ajudar você a recuperar sua saúde e bem-estar.
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

export default Testimonials;

