import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(81) 99999-9999",
      action: "tel:+5581999999999",
      actionText: "Ligar agora"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(81) 99999-9999",
      action: "https://wa.me/5581999999999",
      actionText: "Enviar mensagem"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@adsonmorais.com",
      action: "mailto:contato@adsonmorais.com",
      actionText: "Enviar e-mail"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Recife, PE",
      action: "#",
      actionText: "Ver no mapa"
    }
  ];

  const schedule = [
    { day: "Segunda a Sexta", hours: "8h às 18h" },
    { day: "Sábado", hours: "8h às 12h" },
    { day: "Domingo", hours: "Fechado" }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estou aqui para ajudar você. Entre em contato e agende sua consulta 
            ou tire suas dúvidas sobre os tratamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <contact.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                      <p className="text-gray-600 mb-2">{contact.info}</p>
                      <a
                        href={contact.action}
                        target={contact.action.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
                      >
                        {contact.actionText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horários */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Horários de Atendimento
              </h3>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-primary" size={24} />
                  <h4 className="font-semibold text-gray-900">Horários</h4>
                </div>
                
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-medium text-gray-900">{item.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    💡 Atendimentos de urgência podem ser agendados fora do horário comercial via WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Redes Sociais
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato e Agendamento */}
          <div className="space-y-8">
            {/* Agendamento Rápido */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Agendamento Rápido</h3>
              <p className="mb-6 text-primary-foreground/90">
                Agende sua consulta de forma rápida e prática através dos nossos canais oficiais.
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/5581999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition-colors duration-200 w-full"
                >
                  <MessageCircle size={20} />
                  <span className="font-semibold">Agendar via WhatsApp</span>
                </a>
                
                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-white text-primary px-6 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 w-full"
                >
                  <Calendar size={20} />
                  <span className="font-semibold">Agendar via Doctoralia</span>
                </a>
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Como Posso Ajudar?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                    <MessageCircle className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dúvidas sobre Tratamentos</h4>
                    <p className="text-gray-600 mb-3">
                      Tem dúvidas sobre algum tratamento específico? Entre em contato via WhatsApp para uma consulta personalizada.
                    </p>
                    <a
                      href="https://wa.me/5581999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
                    >
                      Falar no WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                    <Calendar className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Agendamento de Consultas</h4>
                    <p className="text-gray-600 mb-3">
                      Agende sua consulta de forma rápida e segura através do Doctoralia ou WhatsApp.
                    </p>
                    <a
                      href="https://www.doctoralia.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
                    >
                      Agendar no Doctoralia →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Informações sobre Cursos</h4>
                    <p className="text-gray-600 mb-3">
                      Interessado em nossos cursos? Envie um e-mail para mais informações sobre datas e valores.
                    </p>
                    <a
                      href="mailto:contato@adsonmorais.com"
                      className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
                    >
                      Enviar e-mail →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

