import React from 'react';
import { Clock, Users, Award, Calendar, BookOpen, Target } from 'lucide-react';
import { contactConfig, getCourseWhatsAppUrl } from '../config/contact';

const Courses = () => {
  const courses = [
    {
      title: contactConfig.course.title,
      description: contactConfig.course.description,
      duration: "Formação Completa",
      format: "Presencial",
      maxStudents: "Turmas Reduzidas",
      level: "Formação Profissional",
      topics: [
        "Fundamentos da Quiropraxia",
        "Técnicas de Avaliação Clínica",
        "Manipulações Vertebrais",
        "Protocolos de Tratamento",
        "Casos Clínicos Práticos",
        "Certificação Reconhecida"
      ],
      price: contactConfig.course.price,
      status: "Inscrições Abertas"
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Curso de <span className="text-primary">Formação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formação completa e profissionalizante ministrada por especialista 
            reconhecido pelo Coffito na área da Quiropraxia.
          </p>
        </div>

        {/* Cursos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header do Card */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-primary-foreground/90">{course.description}</p>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6">
                {/* Informações do Curso */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="text-primary" size={16} />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="text-primary" size={16} />
                    <span className="text-sm text-gray-600">{course.format}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="text-primary" size={16} />
                    <span className="text-sm text-gray-600">{course.maxStudents}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="text-primary" size={16} />
                    <span className="text-sm text-gray-600">{course.level}</span>
                  </div>
                </div>

                {/* Tópicos */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Conteúdo programático:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Preço e Status */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                    <div className="text-sm text-gray-500">{course.status}</div>
                  </div>
                  
                  <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold">
                    Mais Informações
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefícios dos Cursos */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Por que escolher nossos cursos?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Certificação Reconhecida</h4>
              <p className="text-gray-600">Certificados válidos e reconhecidos no mercado profissional.</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Turmas Reduzidas</h4>
              <p className="text-gray-600">Atendimento personalizado com turmas de no máximo 20 alunos.</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <BookOpen className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Prática Intensiva</h4>
              <p className="text-gray-600">Foco na aplicação prática com casos reais e supervisão direta.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href={getCourseWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold"
          >
            <Calendar size={20} />
            <span>Saiba mais sobre o curso</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;

