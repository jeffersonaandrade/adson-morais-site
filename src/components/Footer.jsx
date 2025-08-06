import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import logoImage from '../assets/WhatsAppImage2025-08-05at10.33.43.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="Adson Morais - Fisioterapeuta" 
                className="h-12 w-auto bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Fisioterapeuta especializado em Fisioterapia, Osteopatia, Terapia Crânio Sacral, 
              Liberação Miofascial Instrumental e Quiropraxia. Cuidado humanizado e técnicas 
              avançadas para sua saúde e bem-estar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-primary transition-colors duration-200">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-primary transition-colors duration-200">Sobre</a></li>
              <li><a href="#especialidades" className="text-gray-300 hover:text-primary transition-colors duration-200">Especialidades</a></li>
              <li><a href="#cursos" className="text-gray-300 hover:text-primary transition-colors duration-200">Cursos</a></li>
              <li><a href="#depoimentos" className="text-gray-300 hover:text-primary transition-colors duration-200">Depoimentos</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-primary transition-colors duration-200">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-300">(81) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-300">contato@adsonmorais.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-gray-300">Recife, PE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Desenvolvimento do site - Todos os direitos reservados a{' '}
            <a 
              href="https://www.instagram.com/jeffersonaandrade10/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium"
            >
              Jefferson Andrade
            </a>
            <Instagram size={16} className="inline ml-1 text-gray-300" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

