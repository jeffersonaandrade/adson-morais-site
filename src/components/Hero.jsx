import React from 'react';
import { Phone, Calendar, CheckCircle } from 'lucide-react';
import heroImage from '../assets/WhatsAppImage2025-08-05at10.28.50(1).jpeg';
import { getWhatsAppUrl, contactConfig } from '../config/contact';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Cuidado <span className="text-primary">especializado</span> para sua saúde
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fisioterapia, Osteopatia, Terapia Crânio Sacral, Liberação Miofascial Instrumental 
                e Quiropraxia com técnicas avançadas e abordagem humanizada.
              </p>
            </div>

            {/* Especialidades em destaque */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactConfig.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-gray-700">{specialty}</span>
                </div>
              ))}
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Phone size={20} />
                <span className="font-semibold">Falar no WhatsApp</span>
              </a>
              <a
                href={contactConfig.doctoralia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Calendar size={20} />
                <span className="font-semibold">Agendar Consulta</span>
              </a>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{contactConfig.stats.experience}</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{contactConfig.stats.patients}</div>
                <div className="text-gray-600">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{contactConfig.stats.specialties}</div>
                <div className="text-gray-600">Especialidades</div>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Adson Morais - Fisioterapeuta"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

